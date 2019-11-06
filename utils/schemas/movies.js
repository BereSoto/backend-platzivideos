const joi = require('@hapi/joi');

const movieIdShema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const movieTitleSchema = joi.string().max(80);
const movieYearSchema = joi.number().min(1888).max(2077);
const movieCoverSchema = joi.number().url();
const movieDescriptionSchema = joi.string().max(300);
const movieDurationSchema = joi.string().min(1).max(300);
const movieContentRatingSchema = joi.string().max(5);
const moviesSourceSchemas = joi.string().url();
const movieTagsSchema = joi.array().items(joi.string().max(50));

const createMovieSchemas = {
    title: movieTitleSchema.required(),
    year: movieyearSchema.required(),
    cover: movieCoverSchema.required(),
    description: movieDescriptionSchema.required(),
    duration: movieDurationSchema.required(),
    contentRating: movieContentRatingSchema.required(),
    source: moviesSourceSchemas.require(),
    tags: movieTagsSchema,

};
const updateMovieSchemas = {
    title: movieTitleSchema,
    year: movieyearSchema,
    cover: movieCoverSchema,
    description: movieDescriptionSchema,
    duration: movieDurationSchema,
    contentRating: movieContentRatingSchema,
    source: moviesSourceSchemas,
    tags: movieTagsSchema,
};

module.exports = {
    movieIdShema,
    createMovieSchemas,
    updateMovieSchemas
};

