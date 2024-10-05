import express from 'express';
const app = express();
const port = 3000;

// Middleware per gestire JSON
app.use(express.json());

// Endpoint per verificare il deviceId
app.post('/verify-device', (req, res) => {
  const { deviceId } = req.body;
  console.log("Received deviceId:", deviceId);
  const validDeviceId = '4243a58a616faed7b90b20790892a9c4'; // Inserisci il tuo deviceId valido

  if (deviceId === validDeviceId) {
    res.status(200).json({ valid: true });
  } else {
    res.status(401).json({ valid: false, message: 'Dispositivo non autorizzato!' });
  }
});

// Lista di deviceId autorizzati (da personalizzare)
const authorizedDevices = ['4243a58a616faed7b90b20790892a9c4', 'validDeviceId2'];

// Endpoint per verificare il deviceId
app.post('/verify-device', (req, res) => {
  const { deviceId } = req.body;

  if (authorizedDevices.includes(deviceId)) {
    res.json({ authorized: true });
  } else {
    res.json({ authorized: false });
  }
});

// Avvio del server
app.listen(port, () => {
  console.log(`Server in esecuzione su http://localhost:${port}`);
});
