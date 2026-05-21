"use client";

import PlexusSphere from './PlexusSphere';
import CardPrism    from './CardPrism';

export default function Scene() {
  return (
    <>
      <directionalLight position={[4, 6, 4]} intensity={0.6} color="#fff8f0" />
      <ambientLight intensity={1.5} />

      <PlexusSphere />

      {/*
       * scale={0.01} — non-zero to prevent WebGL matrix inversion NaN crash.
       * GSAP (Step 5) will tween scale from 0.01 → 1 when the card scrolls into view.
       */}
      <CardPrism type="torus"        position={[-4.0, -1.8, 0]} scale={0.01} />
      <CardPrism type="pyramid"      position={[-1.5, -1.8, 0]} scale={0.01} />
      <CardPrism type="octahedron"   position={[ 0.8, -1.8, 0]} scale={0.01} />
      <CardPrism type="sphere"       position={[ 3.2, -1.8, 0]} scale={0.01} />
      <CardPrism type="cylinder"     position={[ 5.5, -1.8, 0]} scale={0.01} />
      <CardPrism type="dodecahedron" position={[ 7.8, -1.8, 0]} scale={0.01} />
    </>
  );
}
