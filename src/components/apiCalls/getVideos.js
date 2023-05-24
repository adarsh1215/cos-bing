

async function getvideos() {

    // options
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e0dd76157emsh7080062fcaf0e78p12f094jsn0125d1362bbb',
            'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
    };

const url = 'https://youtube138.p.rapidapi.com/home/?hl=en&gl=IN';

    const res = await fetch(url, options);

    const {contents} = await res.json();
    
    contents.map(video => console.log(video.video.title));

    return contents;
}

export default getvideos();

