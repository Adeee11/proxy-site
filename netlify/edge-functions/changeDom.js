export default async (request, context) => {
    const url = 'https://www.testhq.com/'
    const response = await axios.get(url)
    console.log('hi')
    const page = await response.text();
    // var html = response.data
    let replacedHtml = page.replaceAll('Get Started', 'Hello World');
    return new Response(replacedHtml)

    // const response2 = axios.get(url).then(response => {
    //     var html = response.data
    //     let replacedHtml = html.replaceAll('Get Started', 'Hello World');
    //     return new Response(replacedHtml)
    //     // res.send(replacedHtml)
    // })
    // return new Response(replacedHtml)
}


// async (request, context) => {
//     const response = await context.next();
//     const page = await response.text();
//     const regex = /Get Started/i;
//     const msg = `Hiii`
//     const updatedPage = page.replace(regex, msg);

//     return new Response("helllo")
// }