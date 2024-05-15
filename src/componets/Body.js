import '../App.css';
import { Canvas } from '@react-three/fiber';

import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

export function Body() {



    return (
        <div className='body_Main'>
            <div className='d3_body_Main'>
                
                     
               
            </div>
            <div className='CanvasS'>
                         <Canvas shadows async>
                          <PerspectiveCamera makeDefault fov={65} near={0.5} far={100} position={[4, 0.2, 0]} />
                    

                         </Canvas>
                    </div>
            <div className='config_Main'>
                
            </div>



        </div>

    )
}