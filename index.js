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
app.get('/play', (req, res) => {
  //triggerAudioPlayback();
  res.send('Audio playback initiated from orchestrator!');
});

// Initiate audio recording from orchestrator
app.get('/record', (req, res) => {
  //triggerAudioRecording()  
  res.send('Audio recording initiated from orchestrator!');
});

app.listen(PORT, () => {
  console.log(`Welcome to the A-PRESTO orchestrator...Orchestrator listening at http://localhost:${PORT}`);
});

















































