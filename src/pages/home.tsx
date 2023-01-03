import React, { useEffect } from 'react'

const Home = () => {
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "__cf_bm=37qfEfn4CpMbhmwK7236vGMse2ESLMqXkM4kWTPiE4g-1672737564-0-Afp9WEPgDMFFgHpPLsL/ibHJuKGEXxQLv6c0clK+dXIHHvsXr51rglI21qLXa7glc7xkEBIdXgkSzqymLA9mPFE=; __cfruid=501746bb133d6ac0c18eb790f097f6afd7bd2755-1672737564");

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    } as any;
    useEffect(() => {
        fetch("https://www.testhq.com/", requestOptions)
            .then(response => response)
            .then(result => console.log('hello', result))
            .catch(error => console.log('error', error));
    }, [])

    return (
        <div>
            <h1>Hello World!!!!</h1>
        </div>
    )
}

export default Home