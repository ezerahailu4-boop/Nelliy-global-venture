import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface Hub {
  name: string;
  country: string;
  lat: number;
  lng: number;
  type: "origin" | "destination";
  commodity: string;
  transitTime: string;
}

const HUBS: Hub[] = [
  { name: "Addis Ababa (HQ)", country: "Ethiopia", lat: 9.03, lng: 38.74, type: "origin", commodity: "Central Hub • Premium Ethiopian Coffee, Steel & Lubricants", transitTime: "Origin Warehouse & Processing" },
  { name: "Rotterdam / Hamburg", country: "Europe", lat: 51.92, lng: 4.47, type: "destination", commodity: "Specialty Roasted & Green Coffee Export", transitTime: "18-22 Days Maritime" },
  { name: "Dubai / Jebel Ali", country: "UAE / Middle East", lat: 25.07, lng: 55.18, type: "destination", commodity: "Industrial Steel & Rebar Distribution", transitTime: "6-8 Days Direct Sea" },
  { name: "Shanghai / Ningbo", country: "East Asia", lat: 31.23, lng: 121.47, type: "destination", commodity: "Industrial Metals & High-Grade Lubricants", transitTime: "24-28 Days Maritime" },
  { name: "New York / Houston", country: "North America", lat: 40.71, lng: -74.0, type: "destination", commodity: "Organic Arabica Coffee Export (SCAA Certified)", transitTime: "26-30 Days Maritime" },
  { name: "Singapore", country: "Southeast Asia", lat: 1.35, lng: 103.82, type: "destination", commodity: "Maritime Lubricants & Specialty Fluids", transitTime: "16-20 Days Maritime" },
  { name: "Djibouti Port", country: "Horn of Africa", lat: 11.59, lng: 43.14, type: "origin", commodity: "Primary Strategic Maritime Gateway", transitTime: "1-2 Days Rail / Transit" },
];

function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

function createCurvedArc(v1: THREE.Vector3, v2: THREE.Vector3, radius: number): THREE.CatmullRomCurve3 {
  const mid = new THREE.Vector3().addVectors(v1, v2).multiplyScalar(0.5);
  const distance = v1.distanceTo(v2);
  const altitude = radius + Math.max(14, distance * 0.35);
  mid.normalize().multiplyScalar(altitude);

  const control1 = new THREE.Vector3().lerpVectors(v1, mid, 0.5).normalize().multiplyScalar(radius + distance * 0.22);
  const control2 = new THREE.Vector3().lerpVectors(v2, mid, 0.5).normalize().multiplyScalar(radius + distance * 0.22);

  return new THREE.CatmullRomCurve3([v1, control1, mid, control2, v2]);
}

export default function TradeGlobe3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeHub, setActiveHub] = useState<Hub | null>(HUBS[0]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 520;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 230;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    const globeRadius = 76;
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Initial angle focusing brightly on East Africa & international trade corridors
    globeGroup.rotation.x = 0.22;
    globeGroup.rotation.y = 2.45;

    // 1. Real Photorealistic Satellite Earth Map
    const textureLoader = new THREE.TextureLoader();
    const earthMap = textureLoader.load("/earth-real.jpg");
    earthMap.colorSpace = THREE.SRGBColorSpace;

    const sphereGeometry = new THREE.SphereGeometry(globeRadius, 64, 64);
    const sphereMaterial = new THREE.MeshStandardMaterial({
      map: earthMap,
      roughness: 0.4,
      metalness: 0.1,
    });
    const globeMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    globeGroup.add(globeMesh);

    // 2. Delicate Navigation Coordinates Grid
    const wireframeGeo = new THREE.SphereGeometry(globeRadius * 1.004, 32, 32);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.14,
    });
    const wireframeMesh = new THREE.Mesh(wireframeGeo, wireframeMat);
    globeGroup.add(wireframeMesh);

    // 3. Radiant Atmospheric Corona Halo
    const atmosphereGeo = new THREE.SphereGeometry(globeRadius * 1.15, 36, 36);
    const atmosphereMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.72 - dot(vNormal, vec3(0, 0, 1.0)), 2.2);
          gl_FragColor = vec4(0.35, 0.75, 1.0, 1.0) * intensity * 0.95;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
    });
    const atmosphereMesh = new THREE.Mesh(atmosphereGeo, atmosphereMat);
    scene.add(atmosphereMesh);

    // 4. Hub Markers & Pulse Radar Rings
    const addisHub = HUBS[0];
    const addisVec = latLngToVector3(addisHub.lat, addisHub.lng, globeRadius);
    const hubMeshes: { mesh: THREE.Mesh; ring: THREE.Mesh; hub: Hub }[] = [];

    HUBS.forEach((hub) => {
      const isAddis = hub.name.includes("Addis");
      const hubPos = latLngToVector3(hub.lat, hub.lng, globeRadius * 1.02);

      // Pin Marker
      const markerGeo = new THREE.SphereGeometry(isAddis ? 3.4 : 2.2, 16, 16);
      const markerMat = new THREE.MeshBasicMaterial({
        color: isAddis ? 0xffd700 : 0x38bdf8,
      });
      const markerMesh = new THREE.Mesh(markerGeo, markerMat);
      markerMesh.position.copy(hubPos);
      globeGroup.add(markerMesh);

      // Radar Pulse Ring
      const ringGeo = new THREE.RingGeometry(isAddis ? 3.8 : 2.6, isAddis ? 6.4 : 4.4, 28);
      const ringMat = new THREE.MeshBasicMaterial({
        color: isAddis ? 0xffd700 : 0x38bdf8,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.9,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.position.copy(hubPos);
      ringMesh.lookAt(new THREE.Vector3(0, 0, 0));
      globeGroup.add(ringMesh);

      hubMeshes.push({ mesh: markerMesh, ring: ringMesh, hub });
    });

    // 5. Glowing Trade Route Bezier Arcs from Addis Ababa
    const arcs: { curve: THREE.CatmullRomCurve3; particle: THREE.Mesh }[] = [];

    HUBS.forEach((destHub) => {
      if (destHub === addisHub) return;
      const destVec = latLngToVector3(destHub.lat, destHub.lng, globeRadius);
      const curve = createCurvedArc(addisVec, destVec, globeRadius);

      const points = curve.getPoints(60);
      const arcGeo = new THREE.BufferGeometry().setFromPoints(points);
      const arcMat = new THREE.LineBasicMaterial({
        color: 0xffd700,
        transparent: true,
        opacity: 0.85,
      });
      const arcLine = new THREE.Line(arcGeo, arcMat);
      globeGroup.add(arcLine);

      // Animated Transit Bead
      const packetGeo = new THREE.SphereGeometry(1.8, 12, 12);
      const packetMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const packetMesh = new THREE.Mesh(packetGeo, packetMat);
      globeGroup.add(packetMesh);

      arcs.push({ curve, particle: packetMesh });
    });

    // 6. Bright Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.4);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfff5ea, 3.2);
    sunLight.position.set(160, 110, 130);
    scene.add(sunLight);

    const fillLight = new THREE.DirectionalLight(0x7dd3fc, 2.2);
    fillLight.position.set(-160, -60, -80);
    scene.add(fillLight);

    const topLight = new THREE.DirectionalLight(0xffd700, 1.8);
    topLight.position.set(0, 160, 50);
    scene.add(topLight);

    // 7. Interactive Drag to Rotate
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      previousMousePosition = { x: clientX, y: clientY };
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

      const deltaX = clientX - previousMousePosition.x;
      const deltaY = clientY - previousMousePosition.y;

      globeGroup.rotation.y += deltaX * 0.007;
      globeGroup.rotation.x += deltaY * 0.007;

      previousMousePosition = { x: clientX, y: clientY };
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    const dom = renderer.domElement;
    dom.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("mouseup", handlePointerUp);
    dom.addEventListener("touchstart", handlePointerDown, { passive: true });
    window.addEventListener("touchmove", handlePointerMove, { passive: true });
    window.addEventListener("touchend", handlePointerUp);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth slow auto-rotation
      if (!isDragging) {
        globeGroup.rotation.y += 0.0025;
      }

      // Pulse rings
      hubMeshes.forEach(({ ring }, idx) => {
        const scale = 1 + Math.sin(elapsed * 3.5 + idx) * 0.3;
        ring.scale.set(scale, scale, 1);
      });

      // Animate transit beads along arcs
      arcs.forEach(({ curve, particle }, i) => {
        const progress = (elapsed * 0.22 + i * 0.16) % 1;
        const pos = curve.getPoint(progress);
        particle.position.copy(pos);
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      dom.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseup", handlePointerUp);
      dom.removeEventListener("touchstart", handlePointerDown);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("touchend", handlePointerUp);
      if (container && dom.parentNode === container) {
        container.removeChild(dom);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="trade-globe-wrapper">
      <div className="trade-globe-header">
        <div className="trade-globe-badge">
          <span className="live-pulse" />
          <span>Interactive 3D Global Trade Network</span>
        </div>
        <h3 className="trade-globe-title">Live Ethiopian Commodity Supply Routes</h3>
        <p className="trade-globe-sub">
          Drag and rotate the photorealistic 3D Earth to explore active supply chain corridors from Addis Ababa to international markets.
        </p>
      </div>

      <div className="trade-globe-canvas-container" ref={containerRef}>
        {/* Active Hub Card overlay */}
        {activeHub && (
          <div className="trade-globe-tooltip">
            <div className="hub-tag">{activeHub.type === "origin" ? "Export Origin & Hub" : "Destination Market"}</div>
            <h4 className="hub-name">{activeHub.name}</h4>
            <div className="hub-country">{activeHub.country} • <span className="transit-badge">{activeHub.transitTime}</span></div>
            <div className="hub-desc">{activeHub.commodity}</div>
          </div>
        )}

        <div className="trade-globe-hints">
          <span>⟲ Click & Drag to Rotate</span>
        </div>
      </div>

      {/* Quick Corridor Selection Tabs */}
      <div className="trade-globe-selector">
        {HUBS.map((hub) => (
          <button
            key={hub.name}
            type="button"
            className={`globe-hub-pill ${activeHub?.name === hub.name ? "active" : ""}`}
            onClick={() => setActiveHub(hub)}
          >
            <span className="hub-pill-dot" />
            {hub.name.split("/")[0].trim()}
          </button>
        ))}
      </div>
    </div>
  );
}
