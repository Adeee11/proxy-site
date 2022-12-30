export default () => Response.redirect("https://www.testhq.com/", 302)

// export default async (req, context) => {
//     const body = await req.json();

//     if (!isValid(body.access_token)) {
//         return new Response("forbidden", { status: 403 });
//     }

//     return context.next(new Request(req, { body: JSON.stringify(body) }));
// }

