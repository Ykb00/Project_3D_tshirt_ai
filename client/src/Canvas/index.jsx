import { Canvas} from '@react-three/fiber'
import { Environment , Center} from '@react-three/drei'

import Shirt from './Shirt'

import Backdrop from './Backdrop'
import CameraRig from './CameraRig'

const CanvasModel = () => {
  return (
    <div className='w-full h-full bg-white'>
      <Canvas
        shadows
        camera={{ position : [ 0,0,0], fov: 25}}
        gl={ {preserveDrawingbuffer: true} }
        className='w-full max-w-full h-full transition-all ease-in'
      >
        <ambientLight intensity={0.5}/>
        <Environment files="/potsdamer_platz_1k.hdr" />
        {/* <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr" /> */}
        
        <CameraRig>
          <Backdrop />
            <Center>

              <Shirt/>

            </Center>

        </CameraRig>

      </Canvas>

    </div>
  )
}

export default CanvasModel
