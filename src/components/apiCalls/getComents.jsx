
async function getComments(videoId) {

    // url
    const url = `https://youtube-v3-alternative.p.rapidapi.com/comments?id=${videoId}`;

    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'e0dd76157emsh7080062fcaf0e78p12f094jsn0125d1362bbb',
          'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);

    const { data } = await res.json();
    console.log("getComments called")

    return data;
}

export default getComments;