import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovies } from "../redux/actions";
import { getMovie } from "../services/api";

const DetailsPage = () => {
  const dispatch = useDispatch();

  const params = useParams();

  const ans = getMovie(params.id);
  console.log(ans);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const movies = useSelector((state) => state.movies.movies);
  console.log({ movies });
  const movie = movies.find((i) => i.id === parseInt(params.id));
  console.log(params.id, movie);

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div
      className="detailsPage"
      style={{ padding: "2%", width: "80%", margin: "auto" }}
    >
      <h1 style={{ textAlign: "center", color: "teal" }}>Details Page</h1>
      <button className="backButton" onClick={handleBack}>
        Back
      </button>

      <div
        className="detailsPage"
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "30px",
        }}
      >
        <div>
          <img
            style={{ width: "380px" }}
            src={`https://image.tmdb.org/t/p/w200/${movie?.poster_path}`}
            alt={movie?.title}
          />
        </div>
        <div>
          <h1>{movie?.title}</h1>
          <p>
            <strong>Rating : </strong>
            {movie?.vote_average}
          </p>
          <p>
            <strong>Year of Release : </strong>
            {movie?.release_date?.split("-")[0]}
          </p>
          <p>
            <strong>Language : </strong>
            {movie?.original_language?.split("-")[0]}
          </p>
          <p>
            <strong>Description : </strong>
            {movie?.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
