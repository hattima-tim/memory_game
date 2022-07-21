import { useState } from "react";
import uniqid from "uniqid";
function Cards({ score, setScore, bestScore, setBestScore }) {
  const img1Src =
    "https://res.cloudinary.com/du3oueesv/image/upload/v1658404199/images_pl6mlg.png";
  const img2Src =
    "https://res.cloudinary.com/du3oueesv/image/upload/v1658404174/images_w2njnz.png";
  const img3Src =
    "https://res.cloudinary.com/du3oueesv/image/upload/v1658404147/images_wabqw3.png";
  const primaryImgContainerArr = [
    [img1Src, 1],
    [img2Src, 2],
    [img3Src, 3],
  ];
  const [images, setImages] = useState(primaryImgContainerArr);
  const [clickedImageIdList, setClickedImageIdList] = useState([]);
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
