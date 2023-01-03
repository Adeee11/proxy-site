export default async (request, context) => {
    const url = 'https://www.testhq.com/'
    const response = axios.get(url).then(response => {
        var html = response.data
        let replacedHtml = html.replaceAll('Get Started', 'Hello World');
        return new Response(replacedHtml)
        // res.send(replacedHtml)
    })
    // return new Response(replacedHtml)
}

