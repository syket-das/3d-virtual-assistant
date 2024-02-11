import React, {useRef} from 'react';
import {useGLTF, useAnimations} from '@react-three/drei';
import useAnimationStore from '../store/animationStore';
import {useAnimation} from '@react-three/drei';

export default function Robot(props) {
  const group = useRef();
  const {nodes, materials, animations} = useGLTF(
    require('../assets/models/robot.glb'),
  );
  const {actions, names} = useAnimations(animations, group);
  const {currentAnimation} = useAnimationStore(state => state);

  React.useEffect(() => {
    actions[currentAnimation]?.reset().play();

    return () => {
      actions[currentAnimation]?.stop();
    };
  }, [actions, currentAnimation]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Bot" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="Alpha_Joints"
            geometry={nodes.Alpha_Joints.geometry}
            material={materials.Alpha_Joints_MAT}
            skeleton={nodes.Alpha_Joints.skeleton}
          />
          <skinnedMesh
            name="Alpha_Surface"
            geometry={nodes.Alpha_Surface.geometry}
            material={materials.Alpha_Body_MAT}
            skeleton={nodes.Alpha_Surface.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(require('../assets/models/robot.glb'));
