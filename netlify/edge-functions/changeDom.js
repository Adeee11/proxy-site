// export default async (request, context) => {
//     const response = await context.next();
//     const page = await response.text();
//     const regex = /Get Started/i;
//     const msg = `Hiii`
//     const updatedPage = page.replace(regex, msg);

//     return new Response("helllo")
// }



export default async (request, context) => {
    let promise = new Promise(async (resolve, reject) => {
        return new Response.redirect("https://www.testhq.com/", 302)
    });
    let result = await promise; // wait until the promise resolves (*)
    if (result) {
        const response = await context.next();
        const page = await response.text();
        const regex = /Get Started/i;
        const msg = `Hiii`
        const updatedPage = page.replace(regex, msg);

        return new Response("helllo")
    }
}
