import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { MovieState } from "../movieState";

const MovieDetail = () => {
  const history = useHistory();
  // history gives us an object that has all the information about the
  //   page that we are on, we can access it individual properties as per needs
  const url = history.location.pathname;
  //state
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  //useEffect
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]); // we want to run this useEffect everytime our movies changes or URL updates
  //Note- when we use filter it return an array of object so we access our movie as movie[0]
  return (
    <>
      {/* {movie && "our component"} this means that when our movie is available 
    then render out our component - LOOK AT NOTES
     */}
      {movie && (
        <Details>
          <HeadLine>
            <h2>{movie?.title}</h2>{" "}
            {/* movie?.title means that we have a null checker  */}
            <img src={movie?.mainImg} alt="" />
          </HeadLine>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                key={award.title}
                title={award.title}
                description={award.description}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie?.secondaryImg} alt="" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

const Details = styled.div`
  color: white;
`;
const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    height: 100vh;
    width: 100%;
    object-fit: cover;
  }
`;
//Award Component
const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};
export default MovieDetail;
