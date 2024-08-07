import {
  Extrude,
  GizmoHelper,
  GizmoViewport,
  Line,
  OrbitControls,
  Text,
} from '@react-three/drei';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import * as d3 from 'd3';
import { useEffect, useState } from 'react';
import * as THREE from 'three';
function Com() {
  const { scene } = useThree();
  const data = useLoader(THREE.FileLoader, '/geo/china.json');
  const [fonts, setFonts] = useState([]);
  useEffect(() => {
    let _data = JSON.parse(data);
    const fontsArr = [];
    const generateGeometry = (jsondata) => {
      // 墨卡托投影转换
      const projection = d3
        .geoMercator()
        .center([104.0, 37.5])
        .scale(80)
        .translate([0, 0]);
      jsondata.features.pop();
      jsondata.features.forEach((elem) => {
        const name = elem.properties.name;
        const center = projection(elem.properties.center);
        // 每个的 坐标 数组
        const coordinates = elem.geometry.coordinates;
        const shapes = [];
        // 循环坐标数组
        coordinates.forEach((multiPolygon) => {
          multiPolygon.forEach((polygon) => {
            const points = [];
            for (let i = 0; i < polygon.length; i++) {
              const [x, y] = projection(polygon[i]);
              let point = new THREE.Vector2(x, -y);
              points.push(point);
              shapes.push(point);
            }
          });
        });
        fontsArr.push({
          name,
          position: center,
          shapes,
        });
      });
    };
    generateGeometry(_data);
    setFonts(fontsArr);
  }, []);
  const [checked, setChecked] = useState(false);

  return (
    <group position={[-15, 0, 0]}>
      {fonts.map((item, i) => {
        return (
          <mesh
            key={item.name}
            onClick={(e) => {
              console.log(item);
            }}
            onPointerOver={() => {
              setChecked(i);
            }}
          >
            <Line points={item.shapes} color="red" />
            <Extrude
              position={[0, 0, -1.2]}
              material-color={
                i === checked ? 0xffff00 : new THREE.Color(255 * 255 + i * 10)
              }
              args={[new THREE.Shape(item.shapes)]}
            ></Extrude>

            <Text
              position={[item.position[0], -item.position[1], 0.1]}
              key={i}
              scale={0.2}
              color="red"
            >
              {item.name}
            </Text>
          </mesh>
        );
      })}
    </group>
  );
}

const Geo = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ alpha: false }}
      scene={{ background: new THREE.Color(0xffffff) }}
      camera={{ position: [0, 0, 40], fov: 45 }}
    >
      <OrbitControls />
      {/* <axesHelper args={[10]} /> */}
      <GizmoHelper>
        <GizmoViewport
          axisColors={['red', 'green', 'blue']}
          labelColor="black"
        />
      </GizmoHelper>
      <ambientLight intensity={Math.PI} />
      <Com />
    </Canvas>
  );
};
export default Geo;
