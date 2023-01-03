export default async (request, context) => {
    const url = 'https://www.testhq.com/'
    const response = await context.next();
    const page = await response.data.text();
    const regex = 'Get Started';
    const msg = 'Hello World'
    const updatedPage = page.replaceAll(regex, msg);

    return new Response(updatedPage, response)
}