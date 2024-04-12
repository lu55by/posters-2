import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as dat from 'dat.gui'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { mergeBufferGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils'

// import { TextureLoader } from 'three'

// import vertexShader from './shaders/water/vertexShader.glsl?raw'
// import fragmentShader from './shaders/water/fragmentShader.glsl?raw'

// import vertexShader2 from './shaders/shader2/vertexShader.glsl?raw'
// import fragmentShader2 from './shaders/shader2/fragmentShader.glsl?raw'

// import vertexShader3 from './shaders/shader3/vertexShader.glsl?raw'
// import fragmentShader3 from './shaders/shader3/fragmentShader.glsl?raw'

/**
 * Base
 */
// Debug
const gui = new dat.GUI({ width: 340 })
// gui.closed = true
gui.hide()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()


/**
 * Texture loader
 */
const textureLoader = new THREE.TextureLoader()
const normalTex1 = textureLoader.load('maps/normal6.jpg')

// normalTex1.encoding = THREE.sRGBEncoding

/**
 * Objects
 */
// Test planes
// const plane1 = new THREE.Mesh(
//     new THREE.PlaneGeometry(5, 7.7, 1, 1),
//     new THREE.MeshBasicMaterial({color: 0xaa0000})
// )
// plane1.rotation.x = - Math.PI * .5
// plane1.position.x = -5
// plane1.geometry.dispose()
// plane1.material.dispose()
// scene.add(plane1)

// Sphere Middle
// const sphereM = new THREE.Mesh(
//     new THREE.SphereGeometry(1.5, 50, 16),
//     new THREE.MeshStandardMaterial({
//         normalMap: normalTex1,
//         metalness: 1,
//         roughness: .5
//     })
// )
// sphereM.position.y = 1.5
// sphereM.geometry.dispose()
// sphereM.material.dispose()
// const sphereMGui = gui.addFolder('sphereMGui')
// sphereMGui.add(sphereM.position, 'x', -4, 4, 0.001)
// .name('X Pos')
// sphereMGui.add(sphereM.position, 'y', -4, 4, 0.001)
// .name('Y Pos')
// sphereMGui.add(sphereM.position, 'z', -4, 4, 0.001)
// .name('Z Pos')
// sphereMGui.add(sphereM.rotation, 'z', -Math.PI, Math.PI, 0.001)
// .name('Z Rot')
// scene.add(sphereM)
// scene.remove(sphereM)

// Sphere Middle
// const sphereM2 = new THREE.Mesh(
//     new THREE.SphereGeometry(1.5, 50, 16),
//     new THREE.MeshStandardMaterial({
//         normalMap: normalTex1,
//         metalness: 1,
//         roughness: .5
//     })
// )
// sphereM2.geometry.dispose()
// sphereM2.material.dispose()
// sphereM2.position.x = -2.4
// sphereM2.position.y = -1.4
// sphereM2.position.z = -2.9
// sphereM2.rotation.z = -2.6
// const sphereM2Gui = gui.addFolder('sphereM2Gui')
// sphereM2Gui.add(sphereM2.position, 'x', -4, 4, 0.001)
// .name('X Pos')
// sphereM2Gui.add(sphereM2.position, 'y', -4, 4, 0.001)
// .name('Y Pos')
// sphereM2Gui.add(sphereM2.position, 'z', -4, 4, 0.001)
// .name('Z Pos')
// sphereM2Gui.add(sphereM2.rotation, 'z', -Math.PI, Math.PI, 0.001)
// .name('Z Rot')
// scene.add(sphereM2)
// scene.remove(sphereM2)





/**
 * Lights
 */
// const abLight = new THREE.AmbientLight(0xeeeeee, 1)
// scene.add(abLight)

const pLight1 = new THREE.PointLight(0xa93535, 3, 0, 2)
pLight1.position.x = -1.755
pLight1.position.y = 5
pLight1.position.z = -1.3
const pLight1Gui = gui.addFolder('PointLight1')
pLight1Gui.add(pLight1.position, 'x', -5, 5, 0.001).name('X pos')
pLight1Gui.add(pLight1.position, 'y', -5, 5, 0.001).name('Y pos')
pLight1Gui.add(pLight1.position, 'z', -5, 5, 0.001).name('Z pos')
scene.add(pLight1)

const pLight2 = new THREE.PointLight(0x3d35a9, 3, 0, 2)
pLight2.position.x = 1.8
pLight2.position.y = 5
pLight2.position.z = 1.4
const pLight2Gui = gui.addFolder('PointLight2')
pLight2Gui.add(pLight2.position, 'x', -5, 5, 0.001).name('X pos')
pLight2Gui.add(pLight2.position, 'y', -5, 5, 0.001).name('Y pos')
pLight2Gui.add(pLight2.position, 'z', -5, 5, 0.001).name('Z pos')
scene.add(pLight2)

// Light helpers
// const pLight1H = new THREE.PointLightHelper(pLight1, 1, pLight1.color)
// scene.add(pLight1H)
// const pLight2H = new THREE.PointLightHelper(pLight2, 1, pLight2.color)
// scene.add(pLight2H)

// const plane2 = new THREE.Mesh(
//     new THREE.PlaneGeometry(5, 7.7, 1, 1),
//     new THREE.MeshBasicMaterial({color: 0xaaaaaa})
// )
// plane2.rotation.x = - Math.PI * .5
// plane2.geometry.dispose()
// plane2.material.dispose()
// scene.add(plane2)



// const plane3 = new THREE.Mesh(
//     new THREE.PlaneGeometry(5, 7.7, 1, 1),
//     new THREE.MeshBasicMaterial({color: 0x0000aa})
// )
// plane3.position.x = 5
// plane3.rotation.x = - Math.PI * .5
// plane3.geometry.dispose()
// plane3.material.dispose()
// scene.add(plane3)


// Font loader
const fontLoader = new FontLoader()

// Load font
const material = new THREE.MeshStandardMaterial({
    normalMap: normalTex1,
    metalness: 1,
    roughness: .2,
})

const textMeshGuiObj = {
    positionY: 0
}

const textMeshesGui = gui.addFolder('TextMeshes')
const ultraMeshGui = textMeshesGui.addFolder('UltraMesh')
// const musicMeshGui = textMeshesGui.addFolder('MusicMesh')
const festivalMeshGui = textMeshesGui.addFolder('FestivalMesh')

const textMeshes = []

fontLoader.load('fonts/Astrolab_Regular.json', (font) => {

    const ultraGeo = new TextGeometry(
        'ULTRA', 
        {
            font: font,
            size: 0.5,
            height: 0.2,
            bevelEnabled: true,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 2,
            curveSegments: 11
        }
    )
    ultraGeo.center()
    const ultraMesh = new THREE.Mesh(ultraGeo, material)
    textMeshes.push(ultraMesh)
    ultraMesh.position.x = -4
    ultraMesh.position.z = 0
    ultraMesh.rotation.z = -Math.PI * 0.25
    ultraMeshGui.add(ultraMesh.position, 'x', -10, 0, 0.001)
    .name('Pos X')
    ultraMeshGui.add(ultraMesh.position, 'z', -10, 10, 0.001)
    .name('Pos Z')
    ultraMeshGui.add(ultraMesh.rotation, 'z', - Math.PI * 0.5, Math.PI * 0.5, 0.001)
    .name('Rot z')
    

    const musicGeo = new TextGeometry(
        'MUSIC', 
        {
            font: font,
            size: 0.5,
            height: 0.2,
            bevelEnabled: true,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 2,
            curveSegments: 11
        }
    )
    musicGeo.center()
    const musicMesh = new THREE.Mesh(musicGeo, material)
    textMeshes.push(musicMesh)
    musicMesh.position.x = 0
    musicMesh.position.z = 0

    const festivalGeo = new TextGeometry(
        'FESTIVAL', 
        {
            font: font,
            size: 0.5,
            height: 0.2,
            bevelEnabled: true,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 2,
            curveSegments: 11
        }
    )

    festivalGeo.center()
    const festivalMesh = new THREE.Mesh(festivalGeo, material)
    textMeshes.push(festivalMesh)
    festivalMesh.position.x = 5
    festivalMesh.position.z = 0 
    festivalMesh.rotation.z = Math.PI * 0.25
    festivalMeshGui.add(festivalMesh.position, 'x', 0, 10, 0.001)
    .name('Pos X')
    festivalMeshGui.add(festivalMesh.position, 'z', -10, 10, 0.001)
    .name('Pos Z')
    festivalMeshGui.add(festivalMesh.rotation, 'z', - Math.PI * 0.5, Math.PI * 0.5, 0.001)
    .name('Rot z')

    textMeshesGui.add(textMeshGuiObj, 'positionY', 0, 5, 0.001)
    .onChange(() => {
        for (const textMesh of textMeshes) {
            textMesh.position.y = textMeshGuiObj.positionY
        }
    })

    for (const textMesh of textMeshes) {
        textMesh.rotation.x = - Math.PI * 0.5
        textMesh.position.y = 1.4
    }

    scene.add(ultraMesh, musicMesh, festivalMesh)
})


/**
 * Particles
 */

const sphereGeos = []
for (let i = 0; i < 500; i++) {
    const sphereGeo = new THREE.SphereGeometry(0.01, 7, 7)
    
    // Translate    
    sphereGeo.translate(
        (Math.random() - 0.5) * 10,
        ((Math.random() * 0.6) + 0.4) * 2, // 0.x ~ 1: 0 ~ 1 * (1 - 0.x) + 0.x; 0.8 ~ 1: Math.random() * (1 - 0.8) + 0.8
        (Math.random() - 0.5) * 6
    )
    sphereGeos.push(sphereGeo)
}
const mergedSphereGeos = mergeBufferGeometries(sphereGeos)
// const mergedSphereGeos = mergeGeometries(sphereGeos)
const sphereMat = new THREE.MeshStandardMaterial({ 
    // color: 0xffffff,
    // wireframe: true
    normalMap: normalTex1
 })
const sphere = new THREE.Mesh(mergedSphereGeos, sphereMat)
scene.add(sphere)


/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}


window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()


    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
// camera.position.set(-5.4, 3.75, 6)
// camera.position.set(0, 3, 0)
camera.position.set(0, 5, 0)
// camera.position.set(0, 10, 0)
// camera.position.set(-2, 10, 0)
// camera.position.set(0, -5, 0)
scene.add(camera)

// Gui of camera
const cameraGui = gui.addFolder('CameraPosition')
cameraGui.add(camera.position, 'x', -10, 10, 0.1).name('CameraX')
cameraGui.add(camera.position, 'y', -10, 10, 0.001).name('CameraY')
cameraGui.add(camera.position, 'z', -10, 10, 0.1).name('CameraZ')

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
// controls.autoRotate = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// console.log(textMeshes[0]);

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update pointLights
    // x and y
    pLight1.position.x = Math.sin(elapsedTime) * 6
    pLight1.position.y = Math.cos(elapsedTime) * 6

    pLight2.position.x = Math.cos(elapsedTime) * 6
    pLight2.position.y = Math.sin(elapsedTime) * 6

    // Update text meshes
    if (textMeshes.length === 3) {
        // console.log(textMeshes[0]);
        textMeshes[0].rotation.z = elapsedTime
        textMeshes[2].rotation.z = - elapsedTime
    }

    // Update spheres
    // sphere.rotation.x = Math.cos(elapsedTime) * .5   
    // sphere.rotation.y = Math.sin(elapsedTime) * .5
    sphere.position.z = Math.tan(elapsedTime * 0.5) * .5


    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()