import React, { useRef, useEffect } from "react";
import crew_front_narrow_shoulder_img from "../assets/crew_front_narrow_shoulder.png";

const NeckCanvas = ({ selectedImage }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d", { willReadFrequently: true });

    const drawImages = async () => {
      const loadImages = (src) =>
        new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve(img);
          img.onerror = reject;
        });

      try {
        const [crewFrontNarrowShoulderImg] = await Promise.all([
          loadImages(crew_front_narrow_shoulder_img),
        ]);

        context.clearRect(0, 0, canvas.width, canvas.height);        
        context.drawImage(crewFrontNarrowShoulderImg, 0,0, canvas.width,canvas.height );

      
        if (selectedImage) {
          const image = new Image();
          image.src = selectedImage;
          image.onload = () => {
            context.drawImage(image, 87, 15, 120, 80);
          };
        }
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    drawImages();
  }, [selectedImage]);

  return (
    <canvas
      ref={canvasRef}
      width={300} 
      height={600}
      style={{ border: "1px solid black" }}
    />
  );
};

export default NeckCanvas;
