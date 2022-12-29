export default async (request, context) => {
    const response = await context.next();

    const headers = {
        Location: 'https://www.testhq.com/'
    }
    const init = {
        status: 302,
        headers
    }

    const red = await response("do it!", init)
    // return new Response("do it!", init)
    // const response = await context.next();
    const page = await red.text();
    // const regex = /Get Started/i;
    // const msg = `Hiii`
    // const updatedPage = page.replace(regex, msg);

    return new Response("hiiii")
}