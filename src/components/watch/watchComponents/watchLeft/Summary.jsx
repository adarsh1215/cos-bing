function Summary({ summary }) {
    
    const synth = window.speechSynthesis;
    async function scriptSpeak(text) {

        return new Promise((resolve, reject) => {

            synth.cancel();
            const voices = synth.getVoices();
            const voice = voices[10];
            
            const utter = new SpeechSynthesisUtterance(text);
            utter.voice = voice;
            utter.pitch = 1;
            utter.rate = 1;
            
            
            synth.speak(utter);
            utter.onend = () => {
                
                console.log("end speaking");
                resolve()
            }
        });
    }

    async function handelSpekScrip() {
        
        
        for( var idx = 0; idx <= summary.length ; idx) {

            await scriptSpeak(summary.substring(idx, idx + 200));

            idx = idx + 200;
        }

        console.log("functon end");
    }

    return (
        <>
        <button className="speakScriptBtn" onClick={() => handelSpekScrip()}>
            speak!
        </button>
        <button className="pauseSpeakBtn" onClick={()=> synth.pause()}>
            pause
        </button>
        <div className="summary">{summary}</div>
        </>
    );
}

export default Summary;