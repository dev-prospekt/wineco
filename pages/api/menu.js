import { fetcher } from "../../lib/api";

export default async function handler(req, res) {
    try {
        const langcc = req.query.lang == 'undefined' ? 'en' : req.query.lang;
        const response = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/navigation?locale=${langcc}&populate=*`);
        
        res.status(200).json(response)
    } catch (err) {
        console.log(err);
    }
}