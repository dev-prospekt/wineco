import { fetcher } from "../../lib/api";


export default async function handler(req, res) {
    try {
        const response = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/our-brand?locale=${req.query.lang}`);
        
        res.status(200).json(response)
    } catch (err) {
        console.log(err);
    }
}