export default async (request, context) => {
    // const url = new URL(request.url)

    // if (url.searchParams.get("method") !== "transform") {
    //     return;
    // }

    const response = await context.next();
    const page = await response.text();
    const regex = /LOCATION_UNKNOWN/i;
    const regex2 = /Hello/i;

    const location = `${context.geo.city} , ${context.geo.country.name}`
    console.log('location', location);

    const updatedPage = page.replace(regex2, 'hii');

    return new Response(updatedPage, response)
}