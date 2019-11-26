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
  static async getAllMovies(req, res) {
    const { userId } = req.params;
    try {
      const getAllMoviesByUser = await Db.getMovies(Movie, userId);
      return Response.responseOk(res, getAllMoviesByUser);
    } catch (error) {
      return Response.responseNotFound(res);
    }
  }
  static async deleteMovie(req, res) {
    const { id } = req.params;
    try {
      const movieToDelete = await Db.removeMovie(Movie, id);
      return Response.responseOk(res, movieToDelete);
    } catch (error) {
      return Response.responseServerError(res);
    }
  }
  static async updateMovie(req, res) {
    const accessToken = req.get("Authorization");
    const jwtToken = accessToken.split(" ")[1];
    
    const userId = jwt.verify(jwtToken, JWT_KEY).userId;
    const movieId = req.params.id;
    const movieData = { ...req.body };

    const { name, rating, release, directors  } = req.body;
    const updateMovie = { name, rating, release, directors };
    try {
      const result = await validator.validateAsync(updateMovie);
      if (!result.error) {
        const movieToUpdate = await Db.updateMovieData(Movie, userId, movieId, movieData);
        return Response.responseOk(res, movieToUpdate);
      }
    } catch (error) {
      return Response.responseServerError(res);
    }
  }
}

export default MovieData;
