export default () => {
    const headers = {
        Location: 'https://www.testhq.com/'
    }
    const init = {
        status: 302,
        headers
    }
    return new Response("do it!", init)
}