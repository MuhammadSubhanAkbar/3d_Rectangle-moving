import { OrbitControls, Box, Grid } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

// Creating a box component
const MyBox = () => {
  const boxRef = useRef()

  useFrame(({ clock }) => {
    boxRef.current.rotation.y = Math.sin(clock.getElapsedTime()) * 2

    boxRef.current.position.x = Math.cos(clock.getElapsedTime())
  })

  return (
    <Box ref={boxRef}>
      <meshStandardMaterial color="orange" />
    </Box>
  )
}

const App = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 20, 10]} />
        <MyBox />
        <OrbitControls/>
        <Grid
          position={[0, -1, 0]}
          args={[20,20]}
          cellSize={1}
          cellThickness={1}
          cellColor="#6f6f6f"
          sectionSize={3}
          sectionThickness={1.5}
          sectionColor="#9d4b4b"
          fadeDistance={300}
          fadeStrength={1}
        />
      </Canvas>
    </div>
  )
}

export default App