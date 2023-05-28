async function getSummary(videoId) {

    const url = `https://subtitles-for-youtube1.p.rapidapi.com/GetTextsubtitles?video_id=${videoId}`;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e0dd76157emsh7080062fcaf0e78p12f094jsn0125d1362bbb',
            'X-RapidAPI-Host': 'subtitles-for-youtube1.p.rapidapi.com'
        }
    };


    const resSubtitles = await fetch(url, options);
    const subtitles = await resSubtitles.text();

    console.log(subtitles);

    // gettin summary 
    // const encodedParams = new URLSearchParams();

    // encodedParams.set("text", subtitles);

    // const SummaryUrl = 'https://ai-powered-text-summarizer.p.rapidapi.com/summarize';

    // const Summaryptions = {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/x-www-form-urlencoded',
    //         'X-RapidAPI-Key': 'e0dd76157emsh7080062fcaf0e78p12f094jsn0125d1362bbb',
    //         'X-RapidAPI-Host': 'ai-powered-text-summarizer.p.rapidapi.com'
    //     },
    //     body: encodedParams
    // };

    // const resSummary = await fetch(SummaryUrl, Summaryptions);
    // const { summary } = await resSummary.json();

    // console.log(summary);

    // translate summay
    const translateUrl = 'https://text-translator2.p.rapidapi.com/translate';

    const translateOptions = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': 'e0dd76157emsh7080062fcaf0e78p12f094jsn0125d1362bbb',
            'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
        },
        body: new URLSearchParams({
            source_language: 'auto',
            target_language: 'hi',
            text: subtitles
        })
    };

    const resTranslate = await fetch(translateUrl, translateOptions);

    const { data } = await resTranslate.json();

    const translatedText = data.translatedText;

    console.log(data.translatedText);

    return translatedText;

}

export default getSummary;