import React, { useState, useEffect } from "react";
import axios from "../hooks/axios";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import { getAuth } from "@firebase/auth";
import { Footer, Header } from "../components";
import * as ROUTES from "../constans/routes";
import Logo from "../logo.svg";
import requests from "../hooks/request";
import "../components/baner/baner.css";
import Row from "../components/row/row";
import { FooterContainer } from "./footer";

export function BrowseContainer() {
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const { state } = location;
  const userImage = state?.userImage;
  const userName = state?.userName;
  const auth = getAuth();
  const navigate = useNavigate();
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
    <div>
      <Header
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          position: "relative",
        }}
        dontShowOnSmallViewPort
      >
        <Header.Frame>
          <Header.Group>
            <Header.Logo src={Logo} to={ROUTES.Home} alt="netflix" />
          </Header.Group>
          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Header.Profile>
              <Header.Picture
                src={userImage}
              />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture
                    onClick={() => navigate(ROUTES.Profile)}
                    src={userImage}
                  />
                  <Header.Link>{userName}</Header.Link>
                </Header.Group>
                <Header.Group>
                  <Header.Link onClick={() => auth.signOut()}>
                    Sign out
                  </Header.Link>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
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
              {truncate(movie?.overview, 100)}
            </h1>
          </div>
        </div>
      </Header>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetFlixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTreding} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorroMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanticMovies} />
      <FooterContainer />
    </div>
  );
}
