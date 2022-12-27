export default async (request, context) => {

    const headers = {
        Location: 'https://www.testhq.com/'
    }
    const init = {
        status: 302,
        headers
    }
    const r = Response("do it!", init)
    console.log("r", r)
    // const response = await context.next();
    // const page = await response.text();
    // const regex = /Get Started/i;
    // const msg = `Hiii`
    // const updatedPage = page.replace(regex, msg);

    // return new Response(updatedPage, response)
}