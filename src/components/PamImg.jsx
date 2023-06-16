import React, { useEffect, useState } from "react";

function PamImg() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [];
  for (let i = 1; i <= 12; i++) {
    const image = require(`../imgs/${i}.jpg`);
    images.push(image);
  }
  const updateImageIndex = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    updateImageIndex();

    const interval = setInterval(updateImageIndex, 10 * 60 * 1000); // 10 minutes in milliseconds

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="w-full flex justify-center">
      <div className="p-2 border-8 rounded-md border-gray-300">
        <img
          src={images[currentImageIndex]}
          height={200}
          width={200}
          alt="Image"
        />
      </div>
    </div>
  );
}

export default PamImg;
