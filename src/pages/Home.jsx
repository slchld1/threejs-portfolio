import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';

import Japan from '../models/Japan';
import Sky from '../models/Sky.jsx';


{/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
    POPUP
</div>     */}


const Home = () => {
  const adjustJapanForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if(window.innerWidth < 768) {
        screenScale = [0.9, 0.9, 0.9];
    } else {
        screenScale = [ 1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
}

const [japanScale, japanPosition, japanRotation] = adjustJapanForScreenSize();

  return (
    <section className='w-full h-screen relative'>
        <Canvas 
        className='w-full h-screen bg-transparent'
        camera={{ near: 0.1, far: 1000 }}
        > 
            <Suspense fallback={<Loader />}>
                <directionalLight position={[1, 1, 1]} intensity={2} />
                <ambientLight intensity={0.5}/>
                <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />


                <Japan 
                  position={japanPosition}
                  sclae={japanScale}
                  rotation={japanRotation}
                />
                {/* <Sky /> */}
            </Suspense>
        </Canvas>
    </section>
  )
}

export default Home