const { moviesMock } = require('../utils/mocks/movies');

class MoviesServie {
    async getMovies() {
        const movies = await Promise.resolve(moviesMock);
        return movies || [];
        
    }

    async getMovie(){
        const movie = await Promise.resolve(moviesMock[0]);
        return movies || {};
    }

    async createMovie(){
        const createMovieId = await Promise.resolve(moviesMock[0].id);
        return createMovieId;
    }
    async updateMovie(){
        const updateMovieId = await Promise.resolve(moviesMock[0].id);
        return updateMovieId;
    }

    async deletedMovie (){
        const deletedMovieId = await Promise.resolve(moviesMock[0].id);
        return deletedMovieId;
    }
}

module.exports = MoviesServie;