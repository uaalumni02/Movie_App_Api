import Db from '../db/db';
import Movie from '../models/movie';

import validator from '../validator/movie';
import * as Response from '../helpers/response/response';

class MovieData {
    static async addMovieData(req, res) {
        const movieData = { ...req.body };
        try {
            const result = await validator.validateAsync(movieData);
            if (!result.error) {
                const movieInfo = await Db.addMovie(Movie, movieData)
                return Response.responseOkCreated(res, movieInfo)
            }
        } catch (error) {
            return Response.responseServerError(res)
        }
    }
}

export default MovieData