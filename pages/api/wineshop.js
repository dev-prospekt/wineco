

export default async function handler(req, res) {
    try {
        const response = await fetch(
            `http://strapi.wine-co.hr/api/wine-shop?locale=${req.query.lang}`,
            {
                method: 'GET',
            }
        );
        const data = await response.json();
        
        res.status(200).json(data)
    } catch (err) {
        console.log(err);
    }
}