export default async (request, context) => {
    const response = await context.next();
    const page = await response.text();
    const regex = 'https://www.testhq.com/';
    const msg = '/'
    const updatedPage = page.replaceAll(regex, msg);

    return new Response(updatedPage, response)
}