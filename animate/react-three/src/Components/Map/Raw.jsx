import { OrbitControls, Sphere, Text } from '@react-three/drei';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import * as d3 from 'd3';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
function Com() {
  const poi = useRef();
  const { scene } = useThree();
  const data = useLoader(THREE.FileLoader, '/geo/hebei.json');
  const [fonts, setFonts] = useState([]);
  useEffect(() => {
    let _data = JSON.parse(data);
    const fontsArr = [];
    const generateGeometry = (jsondata) => {
      // 初始化一个地图对象
      let map = new THREE.Object3D();
      // map.position.x = -10;
      // 墨卡托投影转换
      const projection = d3
        .geoMercator()
        .center([104.0, 37.5])
        .scale(80)
        .translate([0, 0]);

      jsondata.features.forEach((elem) => {
        // 定一个省份3D对象
        const province = new THREE.Object3D();
        map.add(province);
        const name = elem.properties.name;
        const center = projection(elem.properties.center);
        // const textGeometry = new TextGeometry(name);
        // const textMaterial = new THREE.MeshBasicMaterial({ color: 'red' });
        // const text = new THREE.Mesh(textGeometry, textMaterial);
        // text.position.x = center[0];
        // text.position.y = -center[1];
        // text.position.z = 1.1;
        fontsArr.push({
          name,
          position: center,
        });
        scene.add(map);
        // 每个的 坐标 数组
        const coordinates = elem.geometry.coordinates;
        // 循环坐标数组
        coordinates.forEach((multiPolygon) => {
          multiPolygon.forEach((polygon) => {
            const shape = new THREE.Shape();
            const lineMaterial = new THREE.LineBasicMaterial({
              color: 'red',
            });
            const lineGeometry = new THREE.BufferGeometry();

            const points = [];
            for (let i = 0; i < polygon.length; i++) {
              const [x, y] = projection(polygon[i]);
              if (i === 0) {
                shape.moveTo(x, -y);
              }
              shape.lineTo(x, -y);
              points.push(new THREE.Vector2(x, -y));
            }
            lineGeometry.setFromPoints(points);
            const extrudeSettings = {
              depth: 1,
              bevelEnabled: false,
            };

            const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
            const material = new THREE.MeshBasicMaterial({
              color: 0xffff00,
            });
            const material1 = new THREE.MeshBasicMaterial({
              color: 'red',
              transparent: true,
            });

            const mesh = new THREE.Mesh(geometry, [material, material1]);
            const line = new THREE.Line(lineGeometry, lineMaterial);
            line.position.z = 1;
            province.add(mesh);
            province.add(line);
          });
        });
      });
    };
    generateGeometry(_data);
    setFonts(fontsArr);
  }, []);

  return (
    <>
      <Sphere ref={poi}>
        <meshStandardMaterial color="hotpink" wireframe />
      </Sphere>
      {fonts.map((item, i) => {
        return (
          <Text
            position={[item.position[0], -item.position[1], 1.1]}
            key={i}
            scale={0.2}
            color="red"
          >
            {item.name}
          </Text>
        );
      })}
    </>
  );
}

const RawMap = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ alpha: false }}
      scene={{ background: new THREE.Color(0xffffff) }}
      camera={{ position: [0, 0, 40], fov: 45 }}
    >
      <OrbitControls />
      <axesHelper args={[10]} />
      <ambientLight intensity={Math.PI} />
      <Com />
    </Canvas>
  );
};
export default RawMap;
