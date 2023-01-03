import React, { useEffect } from 'react'

const Home = () => {
    var requestOptions = {
        method: 'GET',
    };

    fetch("https://www.testhq.com/", requestOptions)
        .then(response => response.text())
        .then(result => console.log('result', result))
        .catch(error => console.log('error', error));

    return (
        <div>
            <h1>Hello World!!!!</h1>
        </div>
    )
}

export default Home
