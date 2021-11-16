import React, { useEffect, useRef, useState } from 'react'
import { Painter } from '../models/Painter';

type BackgroundCanvasProps = {

}

export const BackgroundCanvas = (props: BackgroundCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [painter, setPainter] = useState<Painter | null>(null);

  function animate(): void {
    requestAnimationFrame(animate);
    if (painter) painter.update();
  }

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.width = innerWidth;
      canvasRef.current.height = innerHeight;

      const context = canvasRef.current.getContext('2d') as CanvasRenderingContext2D;
      const starsCount = 300;

      setPainter(
        new Painter(
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