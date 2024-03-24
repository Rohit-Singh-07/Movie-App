import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MWZlOGU5YTcyZjAxNjU4OTUzNDhlNzZhYmQ4YmVlZSIsInN1YiI6IjY1ZmRiZjgwMjI2YzU2MDE3ZDZmNTZmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vyrZFrOVYlDTqya7zP46ozYmy_xEjMzpJXC4K00GwUk",
  },
});

export default instance;
