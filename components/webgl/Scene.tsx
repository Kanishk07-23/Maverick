"use client";

import PlexusSphere   from './PlexusSphere';
import CardPrism      from './CardPrism';

export default function Scene() {
  return (
    <>
      <directionalLight position={[4, 6, 4]} intensity={0.6} color="#fff8f0" />
      <ambientLight intensity={1.5} />
      <PlexusSphere />
      <CardPrism type="torus"      position={[-3.2, -1.8, 0]} scale={0.01} />
      <CardPrism type="pyramid"    position={[0,    -1.8, 0]} scale={0.01} />
      <CardPrism type="octahedron" position={[3.2,  -1.8, 0]} scale={0.01} />
    </>
  );
}
