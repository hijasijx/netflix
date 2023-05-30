const API_KEY = "791e40a65fd94b35cc7b4a11f6c30985";

const requests = {
  fetchTreding: `/trending/all/week?api_key=791e40a65fd94b35cc7b4a11f6c30985&language=en-US`,
  fetchNetFlixOriginals: `/discover/tv?api_key=791e40a65fd94b35cc7b4a11f6c30985&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=791e40a65fd94b35cc7b4a11f6c30985&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=791e40a65fd94b35cc7b4a11f6c30985&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=791e40a65fd94b35cc7b4a11f6c30985&with_genres=35`,
  fetchHorroMovies: `/discover/movie?api_key=791e40a65fd94b35cc7b4a11f6c30985&with_genres=27`,
  fetchRomanticMovies: `/discover/movie?api_key=791e40a65fd94b35cc7b4a11f6c30985&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=791e40a65fd94b35cc7b4a11f6c30985with_genres=99`,
};

export default requests;

//https://api.themoviedb.org/3/discover/tv?api_key=2df4d7fa61695306f34766ca2870721a&with_networks=213
