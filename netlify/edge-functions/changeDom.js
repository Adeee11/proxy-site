export default async (request, context) => {
    const response = await context.next();
    const page = await response.text();
    const regex = /Hello/i;
    const msg = `Hiii`
    const updatedPage = page.replace(regex, msg);

    return new Response(updatedPage)
}