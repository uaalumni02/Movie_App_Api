import express from 'express';
import checkAuth from '../middleware/check-auth';

import movieController from '../controllers/movie';

const router = express.Router();


router.route('/')
  .post(checkAuth, movieController.addMovieData)

  router.route('/:userId')
  .get(checkAuth, movieController.getAllMovies)

  router.route('/:id')
  .delete(checkAuth, movieController.deleteMovie)
  .patch(checkAuth, movieController.updateMovie)
  .get(checkAuth, movieController.getMovieById)




export default router;