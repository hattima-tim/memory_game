import { useState } from "react";
import primaryImgContainerArr from "../images";
function Cards({ score, setScore, bestScore, setBestScore }) {
  const [images, setImages] = useState(primaryImgContainerArr);
  const [clickedImageIdList, setClickedImageIdList] = useState([]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

      // swap elements array[i] and array[j]
      // we use "destructuring assignment" syntax to achieve that
      // same can be written as:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleClick = (e) => {
    const isImgAlreadyClicked = clickedImageIdList.find((imgId) => {
      return imgId === e.target.id;
    });

    if (isImgAlreadyClicked) {
      setBestScore(score);
      setScore(0);
      setClickedImageIdList([]);
      alert("finished");
    } else {
      setScore((prevScore) => {
        return prevScore + 1;
      });

      setClickedImageIdList((prevList) => {
        return [...prevList, e.target.id];
      });

      const shuffledArray = shuffleArray(primaryImgContainerArr);
      setImages(shuffleArray);
    }
  };
  const imgList = images.map((imgArr) => {
    return (
      <img
        key={uniqid()}
        id={imgArr[1]}
        src={imgArr[0]}
        alt=""
        onClick={handleClick}
      ></img>
    );
  });
  return <div>{imgList}</div>;
}

export default Cards;
