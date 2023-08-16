import React, { useEffect, useState, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies, searchMovies } from "../redux/actions";
import { Link } from "react-router-dom";
import "../App.css";

const ListPage = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const observer = useRef();
  const lastMovieElementRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  useEffect(() => {
    if (searchQuery) {
      dispatch(searchMovies(searchQuery, page));
    } else {
      dispatch(fetchMovies(page));
    }
  }, [page, searchQuery]);

  return (
    <div style={{ padding: "1%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ color: "teal" }}>Dive into the Movie Universe</h1>
        <input
          className="input"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search movies..."
        />
      </div>
      <div className="moviesList">
        {movies.map((movie, index) => (
          <Link
            to={`/details/${movie.id}`}
            key={index}
            ref={index === movies.length - 1 ? lastMovieElementRef : null}
          >
            <div className="movie" style={{ display: "flex", margin: "2%" }}>
              <div style={{ margin: "2%" }}>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className="details">
                  <h2>{movie.title}</h2>
                  <p>
                    <strong>Rating : </strong>
                    {movie.vote_average}
                  </p>
                  <p>
                    <strong>Description : </strong>
                    {movie.overview}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default ListPage;
