const mongoose = require('mongoose');

const PointSchema = require('./utils/PointSchema');

const Schema = mongoose.Schema;

const DevSchema = new Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
});

module.exports = mongoose.model('Dev', DevSchema);