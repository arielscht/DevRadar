const axios = require('axios');

const Dev = require('../models/Dev');

const parseArrayAsString = require('../utils/parseStringAsArray');
const { findConnections, sendMessage } = require('../websocket');

exports.store = async (req, res, next) => {
    const { github_username, techs, latitude, longitude } = req.body;

    let dev = await Dev.findOne({github_username: github_username});
    
    if(dev) {
        const err = new Error('User already exists');
        err.statusCode = 409;
        err.mensagem = "User with this username already exists";
        return next(err);
    }

    const response = await axios.get(`https://api.github.com/users/${github_username}`);

    const { name = login, avatar_url, bio } = response.data;

    const techsArray = parseArrayAsString(techs);

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }

    dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
    })

    const sendSocketMessageTo = findConnections(
        {latitude, longitude},
        techsArray
    );

    sendMessage(sendSocketMessageTo, 'new-dev', dev);

    return res.json(dev);
};

exports.index = async (req, res, next) => {
    const devs = await Dev.find();

    return res.json(devs);
}

