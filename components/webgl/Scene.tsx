"use client";
import PlexusSphere from './PlexusSphere';
import CardPrism from './CardPrism';

export default function Scene() {
  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[4, 6, 4]} intensity={0.8} />

      {/* The Particle Sphere */}
      <PlexusSphere />

      {/* Hidden Prisms for Step 5 */}
      <CardPrism type="torus" position={[-3.2, -1.8, 0]} scale={0.01} />
      <CardPrism type="pyramid" position={[0, -1.8, 0]} scale={0.01} />
      <CardPrism type="octahedron" position={[3.2, -1.8, 0]} scale={0.01} />
    </>
  );
}