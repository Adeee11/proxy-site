export default async (request, context) => {
    return new Response("Hello from Edge Function!", {
        headers: {
            "content-type": "text/html",
        }
    })
}