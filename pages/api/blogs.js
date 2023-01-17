import { fetcher } from "../../lib/api";


export default async function handler(req, res) {
    try {
        const response = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs?locale=${req.query.lang}&populate=*`);
        
        res.status(200).json(response)
    } catch (err) {
        console.log(err);
    }
}