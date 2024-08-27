const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist/my-angular-app/browser')));

// Handle all other routes by serving the Angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/my-angular-app/browser', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
