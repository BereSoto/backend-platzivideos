const MongoLib = require('../lib/mongo');
class MoviesServie {
    constructor(){
        this.collection = 'movies';
        this.mongoDB = new MongoLib();
    }
    
    async getMovies({ tags }) {
        const query = tags && { tags: { $in: tags }};
        const movies = await this.mongoDB.getAll(this.collection.query);
        return movies || [];
        
    }

    async getMovie({ movieId }){
        const movies = await this.mongoDB.get(this.collection.movieId);
        return movies || {};
    }

    async createMovie({ movie }){
        const createMovieId = await this.mongoDB.create(this.collection.movie);
        return createMovieId;
    }
    async updateMovie({ movieId, movie } = {}){
        const updateMovieId = await this.mongoDB.update(this.collection.movieId, movie);
        return updateMovieId;
    }

    async deletedMovie ({ movieId} ){
        const deletedMovieId = await mongoDB.delete(this.collection.movieId);
        return deletedMovieId;
    }
}

module.exports = MoviesServie;