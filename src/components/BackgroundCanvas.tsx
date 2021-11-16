import React, { useEffect, useRef, useState } from 'react'
import { Space } from '../models/Space';

type BackgroundCanvasProps = {

}

export const BackgroundCanvas = (props: BackgroundCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [space, setSpace] = useState<Space | null>(null);

  (function animate() {
    requestAnimationFrame(animate);
    if (space) space.update();
  })()

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.width = innerWidth;
      canvasRef.current.height = innerHeight;

      const context = canvasRef.current.getContext('2d') as CanvasRenderingContext2D;
      const starsCount = 300;

      setSpace(
        new Space(
          context,
          innerWidth,
          innerHeight,
          starsCount
        ));
    }
  }, []);

  return (
    <canvas ref={canvasRef}></canvas>
  )
}