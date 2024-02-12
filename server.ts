import { parsedMeta } from "https://deno.land/x/ogp_parser/mod.ts"
import summaly from "npm:@ayuskey/summaly";

Deno.serve(async (_request: Request) => {
    const url = new URL(_request.url).searchParams.get("url")
    if (!url) {
        return Response.json({ error: "url is required" }, { status: 400 })
    }
    const meta = await summaly.default(url)
    console.log(meta)
    return Response.json(meta, { status: 200 })
})
