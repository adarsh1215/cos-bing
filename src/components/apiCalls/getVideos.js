

async function getvideos(queryType ,key) {

    var dynamicUrl;

    if(queryType == "search") dynamicUrl = `search?query=${key}&geo=IN&lang=en`;
    else if(queryType == "related") dynamicUrl = `related?id=${key}&geo=IN&lang=en`
    else dynamicUrl = `trending?geo=IN&lang=hi`;
    // dynamicUrl = `trending?geo=IN&lang=hi`;

    // options
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'e0dd76157emsh7080062fcaf0e78p12f094jsn0125d1362bbb',
          'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
        }
    };
      

const url = `https://youtube-v3-alternative.p.rapidapi.com/${dynamicUrl}`;

    const res = await fetch(url, options);

    const { data } = await res.json();
    
    // data.map(video => console.log(video));

    console.log("getvideos called");

    if(res.status == 200) return data;

    return [];
}

export default getvideos;

