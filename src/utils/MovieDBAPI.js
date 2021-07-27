const POPULAR_MOVIE_API = new URL("https://api.themoviedb.org/3/movie/popular");
const API_KEY = process.env.REACT_APP_MOVIE_API;
const IMAGE_URL = "https://image.tmdb.org/t/p/w200";
console.log(API_KEY);
//Add search parameter
POPULAR_MOVIE_API.searchParams.append("api_key",API_KEY);
POPULAR_MOVIE_API.searchParams.append("language","en");
POPULAR_MOVIE_API.searchParams.append("page","1");
const FINAL_MOVIE_URL = POPULAR_MOVIE_API.href;

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

//get movie list
export const getPopularMovies = () => 
    fetch(FINAL_MOVIE_URL, {headers})
        .then(res => res.json())
        .then(data => data.results )
    

//get movie image
export const getMovieImage = (image_path) => {
    return `${IMAGE_URL}${image_path}`;
}
    