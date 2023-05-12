'use strict';

{
  'use strict';

{
 const apikey ='AIzaSyB6w7bB2aNL3_fgU3dA7W9WmN-QtgZDvzk';
 const url = `https://translation.googleapis.com/language/translate/v2?key=${apikey}`;//APIキーをURLの末尾に書く方法は、一般的な認証方法の一つで、APIエンドポイントとともに送信されることで、APIの利用を許可するために必要な認証情報を提供します。
  const JpLanguage = document.getElementById('input-textarea');
  const EnLanguage = document.getElementById('output-textarea')
  const btn = document.querySelector('.btn');
  const Volumebtn = document.getElementById('volume');
  const EnVolume = document.getElementById('En-volume')

  btn.addEventListener('click' , ()=>{
  const InputText = JpLanguage.value;
  //エンドポイントurlに文字列情報を付与し、POSTメソッドで送信
   fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      q: InputText,
      source: 'ja',
      target: 'en'
    })
  })
  .then(response => response.json())
    .then(data => {
      const translatedText = data.data.translations[0].translatedText;
      EnLanguage.value = translatedText;

    })
    .catch(error => {
      console.error('Error:', error);
    });
    
  });
  
    //音声ガイド(日本語版)
    Volumebtn.addEventListener('click' , () =>{
      const synth = window.speechSynthesis;//、Web Speech API の中にある音声合成 (SpeechSynthesis) インターフェイスを表します。
      const utterance = new SpeechSynthesisUtterance(JpLanguage.value);
      synth.speak(utterance);
    });
    //音声ガイド（英語版）
    EnVolume.addEventListener('click' , () =>{
      const synth = window.speechSynthesis;//、Web Speech API の中にある音声合成 (SpeechSynthesis) インターフェイスを表します。
      const utterance = new SpeechSynthesisUtterance(EnLanguage.value);
      synth.speak(utterance);
    });

}
}