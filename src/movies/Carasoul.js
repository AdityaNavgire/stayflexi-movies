import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieContainer from "./MovieContainer";

const CarasoulComponent = ({ moviesData }) => {
  console.log(moviesData, "moviesData in car");
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      {moviesData.length > 0 ? (
        <div style={{ position: "absolute" }}>
          <Carousel responsive={responsive}>
            {moviesData?.map(({ Poster, Title, Year }, index) => {
              console.log(Title, "titlw");
              return (
                <div key={index} style={{ width: "100%" }}>
                  <MovieContainer
                    image={Poster}
                    title={Title}
                    year={Year}
                    key={index}
                  />
                </div>
                // <MovieContainer  />
              );
            })}
          </Carousel>
        </div>
      ) : null}
    </>
  );
};
export default CarasoulComponent;
