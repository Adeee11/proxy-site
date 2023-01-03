export default async (request, context) => {
  
    const response = await context.next();
    const page = await response.text();
    const regex2 = /Hello/i;
    const updatedPage = page.replace(regex2, 'hii');

    return new Response(updatedPage, response)
}