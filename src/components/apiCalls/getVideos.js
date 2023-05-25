

async function getvideos(queryType ,key) {

    var dynamicUrl;

    if(queryType == "search") dynamicUrl = `search/?q=${key}hl=en&gl=IN`;
    else if(queryType == "related") dynamicUrl = `video/related-contents/?id=${key}&hl=en&gl=IN`
    else dynamicUrl = `home/?hl=en&gl=IN`;

    // options
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e0dd76157emsh7080062fcaf0e78p12f094jsn0125d1362bbb',
            'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
    };

const url = `https://youtube138.p.rapidapi.com/${dynamicUrl}`;

    const res = await fetch(url, options);

    const {contents} = await res.json();
    
    contents.map(video => console.log(video.video.title));

    return contents;
}

export default getvideos;

