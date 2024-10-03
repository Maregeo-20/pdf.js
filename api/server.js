const express = import('express');
const app = express();
const port = 3000;

// Middleware per gestire JSON
app.use(express.json());

// Endpoint per verificare il deviceId
app.post('/verify-device', (req, res) => {
  const { deviceId } = req.body;
  const validDeviceId = 'validDeviceId'; // Inserisci il tuo deviceId valido

  if (deviceId === validDeviceId) {
    res.status(200).json({ valid: true });
  } else {
    res.status(401).json({ valid: false, message: 'Dispositivo non autorizzato!' });
  }
});

// Avvio del server
app.listen(port, () => {
  console.log(`Server in esecuzione su http://localhost:${port}`);
});
