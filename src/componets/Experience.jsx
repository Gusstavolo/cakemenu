import { MeshNormalMaterial, PointLight } from "three";
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';


export function Model(props) {
  const { nodes, materials } = useGLTF('./models/bolo.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.BASE1BOLO.geometry} material={materials.BOLOBAE1} scale={[1.08, 0.527, 1.08]} />
      <mesh geometry={nodes.RECHEIO001.geometry} material={materials.RECHEIO1} scale={[1.08, 0.527, 1.08]} />
      <mesh geometry={nodes.RECHEIO.geometry} material={materials.RECHEIO1} scale={[1.08, 0.527, 1.08]} />
      <mesh geometry={nodes.COBERTURA1.geometry} material={materials.Cobertura} scale={[1.098, 0.536, 1.098]} />
      <mesh geometry={nodes.BASE2BOLO.geometry} material={materials.BOLOBAE1} scale={[0.765, 0.373, 0.765]} />
      <mesh geometry={nodes.RECHEIO2001.geometry} material={materials.RECHEIO1} scale={[0.765, 0.373, 0.765]} />
      <mesh geometry={nodes.RECHEIO2.geometry} material={materials.RECHEIO1} scale={[0.765, 0.373, 0.765]} />
      <mesh geometry={nodes.COBERTURA2.geometry} material={materials.Cobertura} scale={[0.777, 0.38, 0.777]} />
      <mesh geometry={nodes.BRIGADEIRO.geometry} material={materials.BIGADEIRO} scale={0.123} />
      <mesh geometry={nodes.TOPO1.geometry} material={materials.TOPO} rotation={[Math.PI / 2, 0, -3.069]} scale={0.95} />
      <mesh geometry={nodes.TOPO1001.geometry} material={materials.TOPO} rotation={[Math.PI / 2, 0, -3.069]} scale={0.95} />
      <mesh geometry={nodes.BRIGADEIRO001.geometry} material={materials.BIGADEIRO} scale={0.078} />
    </group>
  )
}

useGLTF.preload('./models/bolo.glb')



export const Experience = () => {

    
    return (
            <> 
            <ambientLight intensity={1}></ambientLight>
            
            <Model></Model>
            </>
            
    )
}