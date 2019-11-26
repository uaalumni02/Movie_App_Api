import mongoose from 'mongoose';
const { Schema } = mongoose;

import * as validate from '../helpers/model/movie';

const MovieSchema = Schema({
    name:
    {
        type: String,
        required: [true, 'Please enter valid movie name'],
        validate: [validate.isValidMovie, 'Please enter valid movie name'],
    },
    rating:
    {
        type: String,
        required: [true, 'Please enter valid rating'],
        validate: [validate.isValidRating, 'Please enter valid movie rating'],
    },
    release:
    {
        type: String,
        required: [true, 'Please enter valid year'],
        validate: [validate.isValidYear, 'Please enter valid year'],
    },
    directors:
    {
        type: String,
        required: true,
    },
    __v: {
        type: Number,
        select: false
    },
});


export default mongoose.model('Movie', MovieSchema);