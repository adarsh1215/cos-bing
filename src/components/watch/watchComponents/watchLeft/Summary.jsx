function Summary({ summary }) {

    function speakSummary() {
        
        const synth = window.speechSynthesis;
        synth.cancel();
        const voices = synth.getVoices();
        const voice = voices[10];
        
        const utter = new SpeechSynthesisUtterance(summary);
        utter.voice = voice;
        utter.pitch = 1;
        utter.rate = 1;
        
        synth.speak(utter);
        console.log(voice);

    }

    return (
        <>
        <button className="speakScriptBtn" onClick={() => speakSummary()}>
            speak!
        </button>
        <div className="summary">{summary}</div>
        </>
    );
}

export default Summary;