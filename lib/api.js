
export async function fetcher(url, options = {}) {
    let response;

    if(!options) {
        response = await fetch(url);
    } else {
        response = await fetch(url, options);
    }
    
    const data = await response.json();
    return data;
}

export async function globalStrapi(option){
    // const data = await fetch(`https://strapi.wine-co.hr/api/globals/?locale=${locale}&populate=*`)
    // .then(response => response.json())
    // .then(json => json.data);

    console.log('globalStrapi');
}