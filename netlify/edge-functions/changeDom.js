export default async (request, context) => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("https://04d4-122-176-42-49.in.ngrok.io/modify", requestOptions)
        .then(response => response.text())
        .then(result => {
            return new Response(result, response)
        })
        .catch(error => console.log('error', error));
    // const response = await context.next();
    // const page = await response.text();
    // const regex = 'Hello';
    // const msg = 'Hiii'
    // const updatedPage = page.replace(regex, msg);

    // return new Response(updatedPage, response)
}