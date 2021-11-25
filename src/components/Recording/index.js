import axios from 'axios';
import music from './Happy.mp3';
import { useEffect, useState } from 'react';
import useRecorder from './useRecorder';
import $ from 'jquery';
function Recording() {
  let [file, audioURL, isRecording, startRecording, stopRecording] =
    useRecorder();
  const [file2, setFile2] = useState('');
  var settings = {
    url: 'https://cors-anywhere.herokuapp.com/https://api.audd.io/',
    method: 'POST',
    timeout: 0,
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      url: audioURL,
      return: 'apple_music,spotify',
      api_token: 'e97e39cb44c544353614adc0b35fde36',
    }),
  };
  useEffect(() => {
    if (audioURL) {
      fetch(audioURL)
        .then((r) => r.blob())
        .then((blobFile) => {
          const newFile = new File([blobFile], 'hola', { type: blobFile.type });
          setFile2(newFile);
        });
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
    }
  }, [audioURL]);

  return (
    <div className="App">
      <audio src={audioURL} controls />
      <button onClick={startRecording} disabled={isRecording}>
        start recording
      </button>
      <button onClick={stopRecording} disabled={!isRecording}>
        stop recording
      </button>

      <p></p>
    </div>
  );
}
export default Recording;
