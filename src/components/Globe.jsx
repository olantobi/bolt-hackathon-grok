import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Globe = () => {
  const mountRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {    
    // Clear any existing canvases in mountRef.current
    if (mountRef.current) {
      while (mountRef.current.firstChild) {
        mountRef.current.removeChild(mountRef.current.firstChild);
      }
    }

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current = renderer; // store renderer in ref for cleanup

    // Ensure mountRef.current exists before appending
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    } else {      
      return;
    }

    // Responsive globe size based on viewport width
    const isMobile = window.innerWidth < 768;
    const globeRadius = isMobile ? 2 : 5; // Smaller radius on mobile
    const geometry = new THREE.SphereGeometry(globeRadius, 32, 32);
    const texture = new THREE.TextureLoader().load(
      'https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg'
    );
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      wireframe: true, // Cyberpunk wireframe effect
      wireframeLinewidth: 1,
      color: 0x00f7ff, // neonBlue
    });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Add glowing effect
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x00f7ff, // neonBlue
      transparent: true,
      opacity: 0.3,
    }); 
    const glowRadius = globeRadius + 0.1;  // Slightly larger than the globe
    const glowGeometry = new THREE.SphereGeometry(glowRadius, 32, 32);
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glow);

    // Lighting (optional for wireframe)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Position the camera to center the globe behind the text
    camera.position.z = isMobile ? 6 : 10; // Closer camera on mobile
    camera.position.y = 1; // Slightly above center to align with text

    // Center the globe in the scene
    globe.position.set(0, 0, 0);
    glow.position.set(0, 0, 0);

    // Animation loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);      
      globe.rotation.y += 0.005; // Rotate the globe
      glow.rotation.y += 0.005; // Rotate the globe
      glow.opacity = 0.3 + 0.1 * Math.sin(Date.now() * 0.001); // Pulse glow effect
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize for responsiveness
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      // Update renderer size
      renderer.setSize(newWidth, newHeight);

      // Update camera aspect ratio and projection matrix
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      // Adjust globe size and camera position on resize
      const isMobileView = newWidth < 768;
      const newRadius = isMobileView ? 2 : 5;
      const newGlowRadius = newRadius + 0.1;

      // Update globe and glow geometry
      globe.geometry.dispose(); // Dispose of old geometry
      globe.geometry = new THREE.SphereGeometry(newRadius, 32, 32);
      glow.geometry.dispose(); // Dispose of old geometry
      glow.geometry = new THREE.SphereGeometry(newGlowRadius, 32, 32);
      camera.position.z = isMobileView ? 6 : 10; // Adjust camera distance
    };
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {      
      // Cancel animation frame
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener('resize', handleResize);

      // Remove renderer DOM element if mountRef.current exists
      if (mountRef.current && renderer.domElement && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      scene.remove(globe);
      scene.remove(glow);
      geometry.dispose();
      glowGeometry.dispose();
      material.dispose();
      glowMaterial.dispose();
      renderer.dispose();      
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0" />;
};

export default Globe;
