import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
        'Bearer ocNbXFhJ8bYmePEpTtYen5bofgyA28fyYEidzlm7Nx3m8bihLflGGc0dzr-_p1A9Hpb6ESMTLL3zbPzTzudss4DVroWxvM0jKy_0eqvJKp094oZc2kQXdFDj8XaeXnYx'
    }
});