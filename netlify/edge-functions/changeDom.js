export default async (request, context) => {

    // const headers = {
    //     Location: 'https://www.google.com/'
    // }
    // const init = {
    //     status: 302,
    //     headers
    // }
    // return new Response("successful!", init)
    const response = await context.next();
    const page = await response.text();
    const regex = /Get Started/i;
    const msg = `Hiii`
    const updatedPage = page.replace(regex, msg);

    // return new Response(updatedPage, response)
    return new Response("We did it!!!")
}

