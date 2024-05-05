import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import world from '@/assets/services/world.svg'

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
        const geometry = new THREE.SphereGeometry(0.80, 64, 64)
        // Materials
        const material = new THREE.MeshStandardMaterial()
        material.metalness = 0
        material.roughness = 0
        material.normalMap = normalTexture

        material.color = new THREE.Color(0x470257)
        // Mesh
        const sphere = new THREE.Mesh(geometry, material)
        scene.add(sphere)
        // Lights
        const pointLight = new THREE.PointLight(0xFFFFFF, 0)
        pointLight.position.x = 2
        pointLight.position.y = 3
        pointLight.position.z = 4
        scene.add(pointLight)
         //LIGHT 1
         const pointLight1 = new THREE.PointLight(0xFFFFFF, 0)
         pointLight1.position.set(-1.86, 1, -0.5)
         pointLight1.intensity = 1
         scene.add(pointLight1)
        //LIGHT 2
        const pointLight2 = new THREE.PointLight(0xFFFFFF, 0)
        pointLight2.position.set(-1.86, 1, -0.5)
        pointLight2.intensity = 1
        scene.add(pointLight2)
        //LIGHT3
        const pointLight3 = new THREE.PointLight(0xFFFFFF, 0)
        pointLight3.position.set(1.3, -1.2, 1)
        pointLight3.intensity = 1
        scene.add(pointLight3)

        //Sizes
        const sizes = {
            width: 350,
            height: 350,
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

           // Mesh for the satellite
           //const satelliteGeometry = new THREE.SphereGeometry(0.05, 32, 32)
           //const satelliteMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 })
           //const satellite = new THREE.Mesh(satelliteGeometry, satelliteMaterial)
           //scene.add(satellite)
   
           // Position the satellite
           //satellite.position.set(1, 0, 0)

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

         // Move the satellite in a circular orbit around the sphere
         //const time = Date.now() * 0.001
         //satellite.position.x = Math.cos(time) * 1
         //satellite.position.y = Math.sin(time) * 1

        // Render
                renderer.render(scene, camera)

                window.requestAnimationFrame(tick)
        
     }

        tick()
    }, [])

    return canvasRef
}
export default useSphere
