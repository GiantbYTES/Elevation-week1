import { useState } from "react";
import "./Exercise1.css";

export function Exercise1() {
  //   const [curImage, setCurImage] = useState({ id: 0, image: "" });
  const [gallery, setGallery] = useState({
    images: [
      "https://hips.hearstapps.com/hmg-prod/images/lychee-fruit-sugar-1530136136.jpg?crop=1xw:1xh;center,top&resize=640:*",
      "https://hips.hearstapps.com/hmg-prod/images/mango-fruit-sugar-1530136260.jpg?crop=1xw:1xh;center,top&resize=640:*",
      "https://hips.hearstapps.com/hmg-prod/images/cherries-sugar-fruit-1530136329.jpg?crop=1xw:1xh;center,top&resize=640:*",
    ],
    currentImg: 0,
  });
  function shiftImageBack() {
    setGallery((oldGallery) => ({
      ...oldGallery,
      currentImg: oldGallery.currentImg === 0 ? 2 : oldGallery.currentImg - 1,
    }));
  }
  function shiftImageForward() {
    setGallery((oldGallery) => ({
      ...oldGallery,
      currentImg: (oldGallery.currentImg + 1) % 3,
    }));
  }

  return (
    <div className="Exercise1">
      <button className="back" onClick={shiftImageBack}>
        Previous
      </button>
      <img src={gallery.images[gallery.currentImg % 3]} />
      <button className="forward" onClick={shiftImageForward}>
        Next
      </button>
    </div>
  );
}

export default Exercise1;
