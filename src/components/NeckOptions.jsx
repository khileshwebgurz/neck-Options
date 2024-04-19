import React, { useState } from "react";
import Images from "./Images";
import NeckCanvas from "./NeckCanvas";
import "bootstrap/dist/css/bootstrap.css";

const NeckOptions = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelect = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <details>
            <summary>Neck Options</summary>
            <Images onImageSelect={handleImageSelect} />
          </details>
        </div>

        <div className="col-6">
          <NeckCanvas selectedImage={selectedImage} />
        </div>
      </div>
    </div>
  );
};

export default NeckOptions;
