async function getVideoDetails(videoId) {

    const url = `https://youtube138.p.rapidapi.com/video/details/?id=${videoId}&hl=en&gl=IN`;

    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'e0dd76157emsh7080062fcaf0e78p12f094jsn0125d1362bbb',
          'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);

    const data = await res.json();

    console.log("hi");

    return data;
}

export default getVideoDetails;