import axios from "axios";

export default async (request, context) => {
    var config = {
        method: 'get',
        url: 'https://04d4-122-176-42-49.in.ngrok.io/modify',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET",
            "Vary": "Access-Control-Request-Headers",
            "Access-Control-Allow-Headers": "Content-Type,Accept"
        }
    };
    const response = await context.next();
    const page = await response.text();


    axios(config)
        .then(function (resp) {
            // const updatedPage = page.replace(regex, msg);

            return new Response(resp, response)

            // console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    // const response = await context.next();
    // const page = await response.text();
    // const regex = 'Hello';
    // const msg = 'Hiii'
    // const updatedPage = page.replace(regex, msg);

    // return new Response(updatedPage, response)
}