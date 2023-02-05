import React from "react";
import CarouselSlider from "react-carousel-slider";

export default function CarasoulSlider() {
  let data = [
    {
      id: "1",
      imgSrc: "https://i.imgur.com/d5aiXJP.jpg",
    },
    {
      id: "2",
      imgSrc: "https://i.imgur.com/pgCzueK.jpg",
    },
    {
      id: "3",
      imgSrc: "https://i.imgur.com/pgCzueK.jpg",
    },
    {
      id: "4",
      imgSrc: "https://i.imgur.com/d5aiXJP.jpg",
    },
    {
      id: "5",
      imgSrc: "https://i.imgur.com/pgCzueK.jpg",
    },
  ];
  let manner = {
    autoSliding: { interval: "2s" },
  };
  let buttonSetting = {
    placeOn: "bottom-beneath",
    //hoverEvent: true,
    style: {
      left: {
        margin: "0px 0px 0px 10px",
      },
      right: {
        margin: "0px 10px 0px 0px",
      },
    },
  };
  let itemsStyle = {
    margin: "0px 0px",
    padding: "0px",
  };
  return (
    <div className="CarouselSlider">
      <CarouselSlider
        slideItems={data}
        manner={manner}
        buttonSetting={buttonSetting}
        itemsStyle={itemsStyle}
      />
    </div>
  );
}
