

export default async function handler(req, res) {
    try {
        const response = await fetch(
            `http://strapi.wine-co.hr/api/blogs?locale=${req.query.lang}&populate=*`,
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