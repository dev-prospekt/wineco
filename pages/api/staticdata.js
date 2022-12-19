
import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
    const jsonDirectory = path.join(process.cwd(), 'json');
    const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');

    //Return the content of the data file in json format
    res.status(200).json(fileContents);
}