const express = require('express');
const moviesService = require('../services/movies');


function moviesApi(app){
    conts router = express.Router();
    app.use("/api/movies", router);

    const moviesService = moviesService();

    router.get("/", async function(req, res, next){
        const { tags } = req.query;
                try{
          const movies = await moviesService.getMovies({ tags });

          res.status(200).json({
              data: movies,
              messege: 'movies listed'
          });
        } catch (err) {
            next(err);
        }
    });
    router.get("/:moviesId", async function(req, res, next){
        const { movieId } = req.params;
        try{
          const movies = await moviesService.getMovie({ movieId });

          res.status(200).json({
              data: movies,
              messege: 'movies retrieve'
          });
        } catch (err) {
            next(err);
        }
    });
    router.post("/", async function(req, res, next){
        conts { body: movie } = req;
        try{
          const createMoviesId = await createMovi({ movie });

          res.status(200).json({
              data: createMoviesId,
              messege: 'movie created'
          });
        } catch (err) {
            next(err);
        }
    });
    router.put("/:movieId", async function(req, res, next){
        conts { movieId } = req.params;
        conts { body: movie} = req;
        try{
          const updateMovieId = await moviesService.updateMovie({ movieId, movie });

          res.status(200).json({
              data: updateMovieId,
              messege: 'movies update'
          });
        } catch (err) {
            next(err);
        }
    });
    router.delete("/:movieId", async function(req, res, next){
        conts { movieId } = req.params;
        try{
          const deleteMovieId = await moviesService.deleteMovie({ movieId });

          res.status(200).json({
              data: deleteMovieId,
              messege: 'movies delete'
          });
        } catch (err) {
            next(err);
        }
    });
}

module.exports = moviesApi;