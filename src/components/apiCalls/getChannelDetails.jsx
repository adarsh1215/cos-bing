
async function getChannelDetails(channelId) {

    const url = `https://youtube-v3-alternative.p.rapidapi.com/channel?id=${channelId}`;

    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'e0dd76157emsh7080062fcaf0e78p12f094jsn0125d1362bbb' ,
          'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);

    const data = await res.json();

    console.log(data);

    return data;
}

export default getChannelDetails;