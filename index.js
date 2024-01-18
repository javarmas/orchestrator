import express from 'express'
import bodyParser from 'body-parser';
import axios from 'axios';
import { exec } from 'child_process';

const app = express();
const PORT = process.env.PORT || 8080;


app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to the orchestrator for the A-Presto model!');
  });


// Initiate audio playback from orchestrator
app.get('/play', async(req, res) => {
  //triggerAudioPlayback();
  const response = await axios.post('http://https://orchestrator-r407.onrender.com//execute?command=./~/AIY-voice-kit-python/src/examples/voice/voice_recorder.py');

  if (response.status === 200) {
    res.send('Audio recording initiated from orchestrator!');
  } else {
    res.send('Error initiating audio recording');
  }
});

// Initiate audio recording from orchestrator
app.get('/record', (req, res) => {
  //triggerAudioRecording()  
  res.send('Audio recording initiated from orchestrator!');
});

app.listen(PORT, () => {
  console.log(`Welcome to the A-PRESTO orchestrator...Orchestrator listening at http://localhost:${PORT}`);
});

















































