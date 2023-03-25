import React,{Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
// import CanvasLoader
import { Decal,Float,OrbitControls,Preload,useTexture } from '@react-three/drei'
const Ball = (props) => {
  const [decal]=useTexture([props.imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
    <ambientLight intensity={0.25}/>
    <directionalLight position={[0,0,0.05]}/>
    <mesh castShadow receiveShadow scale={2.75}>
      <icosahedronBufferGeometry args={[1,1]}/>
      <meshStandardMaterial 
      color="#fff8eb"
      polygonOffset
      polygonOffsetFactor={-5}
      flatShading
      />
      <Decal 
      map={decal}
      position={[0,0,1]}
      rotation={[2 * Math.PI,0,6.25]}
      />
      </mesh></Float>
  )
}

const BallCanvas=({icon})=>{
  return(
    <Canvas
    frameloop="demand"
   
    gL={{ preserveDrawingBuffer: true }}
  >
    <Suspense 
    // fallback={<CanvasLoader/>}
    >
      
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Ball imgUrl={icon}/>
    </Suspense>
    <Preload all />
  </Canvas>
  )
}


export default BallCanvas