import React, { useEffect, useState } from "react";
import "./baner.css";
import axios from "../../hooks/axios";
import requests from "../../hooks/request";

export default function Baner() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetFlixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <>
      <div className="baner">
        <div className="baner_content">
          <h1 className="baner_title">
            {movie?.name || movie?.title || movie?.original_name}
          </h1>
          <div className="baner_buttons">
            <button className="baner_button">Play</button>
            <button className="baner_button">My List</button>
          </div>
          <h1 className="baner_discription">
            {truncate(
              `This is a test DiscriptionThis is a test DiscriptionThis is a test DiscriptionThis is a test DiscriptionThis is a test DiscriptionThis is a test DiscriptionThis is a test DiscriptionThis is a test DiscriptionThis is a test DiscriptionThis is a test Discription`,
              150
            )}
          </h1>
        </div>
      </div>
      <div className="baner_fadeBottom" />
    </>
  );
}
