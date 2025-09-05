import { useEffect, useRef, FC } from 'react';
import * as THREE from 'three';
import './Hyperspeed.css';

interface HyperspeedProps {
  effectOptions?: Record<string, unknown>;
}

const Hyperspeed: FC<HyperspeedProps> = ({ effectOptions = {} }) => {
  const hyperspeed = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = hyperspeed.current;
    if (!container) return;

    // Create the Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(90, container.offsetWidth / container.offsetHeight, 0.1, 2000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Create fog for depth
    const fog = new THREE.Fog(0x000000, 50, 500);
    scene.fog = fog;

    // Create road geometry with multiple segments
    const roadSegments: THREE.Mesh[] = [];
    for (let i = 0; i < 3; i++) {
      const roadGeometry = new THREE.PlaneGeometry(20, 1000);
      const roadMaterial = new THREE.MeshLambertMaterial({ 
        color: 0x080808,
        transparent: true,
        opacity: 0.9
      });
      const road = new THREE.Mesh(roadGeometry, roadMaterial);
      road.rotation.x = -Math.PI / 2;
      road.position.z = -1000 + (i * 1000);
      roadSegments.push(road);
      scene.add(road);
    }

    // Create road lines with better geometry
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = [];
    const lineColors = [];
    
    // Create dashed lines
    for (let i = 0; i < 200; i++) {
      const z = -i * 5;
      const dashLength = 3;
      const gapLength = 2;
      const totalLength = dashLength + gapLength;
      const offset = (i * totalLength) % totalLength;
      
      if (offset < dashLength) {
        // Center line
        linePositions.push(-0.5, 0.01, z);
        linePositions.push(0.5, 0.01, z);
        lineColors.push(1, 1, 1);
        lineColors.push(1, 1, 1);
        
        // Side lines
        linePositions.push(-8, 0.01, z);
        linePositions.push(-7, 0.01, z);
        linePositions.push(7, 0.01, z);
        linePositions.push(8, 0.01, z);
        lineColors.push(1, 1, 1);
        lineColors.push(1, 1, 1);
        lineColors.push(1, 1, 1);
        lineColors.push(1, 1, 1);
      }
    }
    
    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));
    
    const lineMaterial = new THREE.LineBasicMaterial({ 
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      linewidth: 2
    });
    const roadLines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(roadLines);

    // Create car lights with better effects
    const carLights: THREE.Mesh[] = [];
    const carLightGeometry = new THREE.SphereGeometry(0.2, 8, 8);
    
    for (let i = 0; i < 30; i++) {
      const carLight = new THREE.Mesh(carLightGeometry, new THREE.MeshBasicMaterial({ 
        color: Math.random() > 0.5 ? 0x03b3c3 : 0xd856bf,
        transparent: true,
        opacity: 0.9
      }));
      
      // Add glow effect
      const glowGeometry = new THREE.SphereGeometry(0.5, 8, 8);
      const glowMaterial = new THREE.MeshBasicMaterial({
        color: carLight.material.color,
        transparent: true,
        opacity: 0.3
      });
      const glow = new THREE.Mesh(glowGeometry, glowMaterial);
      carLight.add(glow);
      
      carLight.position.set(
        (Math.random() - 0.5) * 16,
        0.5,
        -Math.random() * 2000
      );
      carLights.push(carLight);
      scene.add(carLight);
    }

    // Create side lights with better positioning
    const sideLights: THREE.Mesh[] = [];
    const sideLightGeometry = new THREE.BoxGeometry(0.2, 3, 0.2);
    
    for (let i = 0; i < 100; i++) {
      const sideLight = new THREE.Mesh(sideLightGeometry, new THREE.MeshBasicMaterial({ 
        color: 0x03b3c3,
        transparent: true,
        opacity: 0.8
      }));
      
      // Add glow
      const glowGeometry = new THREE.BoxGeometry(0.4, 3.5, 0.4);
      const glowMaterial = new THREE.MeshBasicMaterial({
        color: 0x03b3c3,
        transparent: true,
        opacity: 0.2
      });
      const glow = new THREE.Mesh(glowGeometry, glowMaterial);
      sideLight.add(glow);
      
      sideLight.position.set(
        Math.random() > 0.5 ? 10 : -10,
        1.5,
        -i * 20
      );
      sideLights.push(sideLight);
      scene.add(sideLight);
    }

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 10, 0);
    scene.add(directionalLight);

    // Animation with better speed and effects
    let time = 0;
    let speed = 5;
    const animate = () => {
      time += 0.016;
      speed = 5 + Math.sin(time * 0.1) * 2; // Varying speed
      
      // Move road segments
      roadSegments.forEach((road) => {
        road.position.z += speed;
        if (road.position.z > 1000) {
          road.position.z = -1000;
        }
      });
      
      // Move road lines
      roadLines.position.z += speed;
      if (roadLines.position.z > 100) {
        roadLines.position.z = -100;
      }
      
      // Move car lights with varying speeds
      carLights.forEach((light, index) => {
        const lightSpeed = speed + (Math.random() - 0.5) * 2;
        light.position.z += lightSpeed;
        if (light.position.z > 100) {
          light.position.z = -2000;
          light.position.x = (Math.random() - 0.5) * 16;
        }
        
        // Add some swaying motion
        light.position.x += Math.sin(time + index * 0.1) * 0.01;
      });
      
      // Move side lights
      sideLights.forEach((light) => {
        light.position.z += speed;
        if (light.position.z > 100) {
          light.position.z = -2000;
        }
      });
      
      // Camera movement for more dynamic effect
      camera.position.x = Math.sin(time * 0.05) * 3;
      camera.position.y = 8 + Math.sin(time * 0.03) * 2;
      camera.position.z = Math.sin(time * 0.02) * 1;
      
      // Look ahead
      camera.lookAt(0, 0, -100);
      
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = container.offsetWidth / container.offsetHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.offsetWidth, container.offsetHeight);
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [effectOptions]);

  return <div ref={hyperspeed} className="hyperspeed-container"></div>;
};

export default Hyperspeed;
