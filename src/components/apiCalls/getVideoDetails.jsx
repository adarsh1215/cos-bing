
async function getVideoDetails(videoId) {

    const url = `https://youtube-v3-alternative.p.rapidapi.com/video?id=${videoId}`;

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'e0dd76157emsh7080062fcaf0e78p12f094jsn0125d1362bbb',
        'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
      }
    };

    const res = await fetch(url, options);

    const data = await res.json();

    console.log("getVideoDetails called");

    return data;
}

export default getVideoDetails;