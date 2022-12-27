export default async (request, context) => {
    const url = new URL(request.url)

    const response = await context.next();
    const page = await response.text();
    const regex = /LOCATION_UNKNOWN/i;

    const location = `${context.geo.city} , ${context.geo.country.name}`
    console.log('location', location);

    const updatedPage = page.replace(regex, location);

    return new Response(updatedPage, response)
}