import '../App.css';
import { Canvas } from '@react-three/fiber';
import { Experience } from './Experience';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
export function Body() {



    return (
        <div className='body_Main'>
            <div className='d3_body_Main'>
                
                     
               
            </div>
                <div className='CanvasS'>
                         <Canvas shadows>
                         <PerspectiveCamera makeDefault  position={[0, 1.2, 3.8]} />
  
                        
                            <Experience></Experience>
                            
                         </Canvas>
                    </div>
            <div className='config_Main'>
                
            </div>



        </div>

    )
}