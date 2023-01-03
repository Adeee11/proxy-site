import axios from 'axios';
import React from 'react'

const Home = () => {
    var config = {
        method: 'get',
        url: 'https://04d4-122-176-42-49.in.ngrok.io/modify',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET",
            "Vary": "Access-Control-Request-Headers",
            "Access-Control-Allow-Headers": "Content-Type,Accept"
        }
    };

    axios(config)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });


    return (
        <div>
            <h1>Hello World!!!!</h1>
        </div>
    )
}

export default Home