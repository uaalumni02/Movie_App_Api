import Db from "../db/db";
import Movie from "../models/movie";

import validator from "../validator/movie";
import * as Response from "../helpers/response/response";

import jwt from "jsonwebtoken";
const { JWT_KEY } = process.env;

class MovieData {
  static async addMovieData(req, res) {
    const accessToken = req.get("Authorization");
    const jwtToken = accessToken.split(" ")[1];
    const userId = jwt.verify(jwtToken, JWT_KEY).userId;
    const movieData = { ...req.body, userId };
    try {
      const result = await validator.validateAsync(movieData);
      if (!result.error) {
        const movieInfo = await Db.addMovie(Movie, movieData);
        return Response.responseOkCreated(res, movieInfo);
      }
    } catch (error) {
      return Response.responseServerError(res);
    }
  }
}

export default MovieData;
