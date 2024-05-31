import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import world from '@/assets/services/world.jpg'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import sateliteGLB from '@/assets/services/Satellite.glb'


const useSphere = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const textureLoader = new THREE.TextureLoader()

        const normalTexture = textureLoader.load(world)
        // Canvas
        const canvas = canvasRef?.current

        if(!canvas) return
        // Scene
        const scene = new THREE.Scene()
        // Objects
        const geometry = new THREE.SphereGeometry(0.67, 64, 64)
        // Materials
        const material = new THREE.MeshStandardMaterial()
        material.metalness = 0.8
        material.roughness = 0.8
        material.map = normalTexture

        material.color = new THREE.Color(0xFFFFFF)
        // Mesh
        const sphere = new THREE.Mesh(geometry, material)
        scene.add(sphere)
        // Lights
        const pointLight = new THREE.PointLight(0xFFFFFF, 0)
        pointLight.position.x = 10
        pointLight.position.y = 0
        pointLight.position.z = 0
        scene.add(pointLight)
        // Ambient Light
        const ambientLight = new THREE.AmbientLight(0xe3ded1, 0.5); // soft white light
        scene.add(ambientLight);
         //LIGHT 1
        const pointLight1 = new THREE.PointLight(0xFFFFFF, 0)
        pointLight1.position.set(5, 0, 3)
        pointLight1.intensity = 0.75
        scene.add(pointLight1)

        //LIGHT 2
        const pointLight2 = new THREE.PointLight(0xFFFFFF, 0)
        pointLight2.position.set(5, 0, 3)
        pointLight2.intensity = 0.75
        scene.add(pointLight2)

        //LIGHT3
        const pointLight3 = new THREE.PointLight(0xFFFFFF, 0)
        pointLight3.position.set(10, 0, 3)
        pointLight3.intensity = 0.75
        scene.add(pointLight3)

        //Sizes
        const sizes = {
            width: 360,
            height: 360,
        }
        window.addEventListener('resize', () => {

            // Update camera
            camera.aspect = sizes.width / sizes.height
            camera.updateProjectionMatrix()

            // Update renderer
            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        })

        const camera = new THREE.PerspectiveCamera(
            50,
            sizes.width / sizes.height,
            0.5,
            100
        )
        camera.position.x = 0
        camera.position.y = 0
        camera.position.z = 2.1
        scene.add(camera)

        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true,
        })
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

          // Load the satellite model
    const loader = new GLTFLoader()
    let satellite1, satellite2, satellite3


loader.load(sateliteGLB, (gltf) => {

    satellite1 = gltf.scene.clone()
    satellite2 = gltf.scene.clone()
    satellite3 = gltf.scene.clone()

    // Scale down the satellites
    satellite1.scale.set(0.005, 0.005, 0.005)
    satellite2.scale.set(0.005, 0.005, 0.005)
    satellite3.scale.set(0.005, 0.005, 0.005)

    scene.add(satellite1)
    scene.add(satellite2)
    scene.add(satellite3)

    // Position the satellites
    satellite1.position.set(1, 0, 0)
    satellite2.position.set(-1, 2, 0)
    satellite3.position.set(2, 1, 0)
}, undefined, (error) => {
    console.error(error)
})

        // Add OrbitControls
        const controls = new OrbitControls(camera, renderer.domElement)
        controls.enableDamping = true
        controls.rotateSpeed = 0.5  // Lower values will slow down the rotation speed
        controls.enableZoom = false  // Disable zoom

        //Animate
        const tick = async () => {
            // Update OrbitControls
            controls.update()
         
        // Automatic rotation
        sphere.rotation.y += 0.005   

         // Move the satellites in circular orbits around the sphere
    // Move the satellites in circular orbits around the sphere
    if (satellite1 && satellite2 && satellite3) {
        const time = Date.now() * 0.0006
        const radius = 0.77  // Adjust this value to change the radius of the orbits

        // Convert degrees to radians
        const degToRad = (degrees) => degrees * (Math.PI / 180)

        // Satellite 1 moves in the xy plane
let time1 = Date.now() * 0.00053  // Adjust this value to change the speed
satellite1.position.x = Math.cos(time1 + degToRad(25)) * radius
satellite1.position.y = Math.sin(time1 + degToRad(25)) * radius
satellite1.position.z = 0
satellite1.lookAt(0,0,0)

// Satellite 2 moves in the yz plane
let time2 = Date.now() * 0.00031  // Adjust this value to change the speed
satellite2.position.x = 0
satellite2.position.y = Math.sin(time2 + degToRad(25)) * radius
satellite2.position.z = Math.cos(time2 + degToRad(20)) * radius
satellite2.lookAt(0,0,0)

// Satellite 3 moves in the xz plane
let time3 = Date.now() * 0.00042  // Adjust this value to change the speed
satellite3.position.x = Math.cos(time3 + degToRad(25)) * radius
satellite3.position.y = 0
satellite3.position.z = Math.sin(time3 + degToRad(20)) * radius
satellite3.lookAt(0,0,0)
    }
        // Render
                renderer.render(scene, camera)

                window.requestAnimationFrame(tick)
        
     }

        tick()
    }, [])

    return canvasRef
}
export default useSphere
