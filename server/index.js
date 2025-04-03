const express = require('express');
const app = express();
const usersRoutes = require('./routes/users'); // Import rutele pentru utilizatori
const gradesRoutes = require('./routes/grades'); // Import rutele pentru note

app.use(express.json()); // Middleware pentru parsing JSON

app.use(usersRoutes); // Înregistrare rute utilizatori
app.use(gradesRoutes); // Înregistrare rute note

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Serverul rulează pe portul ${PORT}`);
});
