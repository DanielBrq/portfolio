<script lang="ts" setup>
import * as THREE from 'three';
import { ref, onMounted, onUnmounted } from 'vue';

const canvasRef = ref<HTMLCanvasElement | null>(null);
let renderer: THREE.WebGLRenderer | null = null;
let animationId: number | null = null;

onMounted(() => {
    if (!canvasRef.value) return;

    // ESCENA: el mundo 3D donde van todos los objetos
    const scene = new THREE.Scene();

    // CAMARA: la "ventana" por la que ves la escena
    // PerspectiveCamera(fov, aspect, near, far)
    // fov=75 grados, aspect=ancho/alto, near/far=qué tan cerca/lejos se renderiza
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5; // mover la cámara hacia atrás para ver el objeto

    // RENDERIZADOR: convierte la escena 3D en píxeles dentro del <canvas>
    renderer = new THREE.WebGLRenderer({ canvas: canvasRef.value, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // GEOMETRÍA: la forma del objeto (un cubo de 1x1x1)
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    // MATERIAL: cómo se ve la superficie (color verde sólido)
    const material = new THREE.MeshBasicMaterial({ color: 0xf68443 });
    // MESH = geometría + material → el objeto listo para poner en escena
    const cube = new THREE.Mesh(geometry, material);
    //scene.add(cube); // meter el cubo en la escena

    // BUCLE DE ANIMACIÓN: se ejecuta ~60 veces/segundo (cada frame)
    function animate() {
        cube.rotation.x += 0.01; // rotar en X un poquito cada frame
        cube.rotation.y += 0.02; // rotar en Y un poquito cada frame
        renderer!.render(scene, camera); // dibujar un frame
        animationId = requestAnimationFrame(animate); // pedir el siguiente frame
    }

    animate(); // arrancar el bucle
});

onUnmounted(() => {
    if (animationId) cancelAnimationFrame(animationId); // parar el bucle
    renderer?.dispose(); // liberar memoria del renderizador (WebGL context)
});
</script>

<template>
    <canvas ref="canvasRef" class="fixed inset-0 w-full h-full block" />
</template>
