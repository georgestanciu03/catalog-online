const express = require('express');
const router = express.Router();

// Lista utilizatorilor
router.get('/users', (req, res) => {
    res.json({ message: "Lista utilizatorilor" });
});

// Obținerea unui utilizator după ID
router.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ message: `Detalii pentru utilizatorul cu ID-ul ${userId}` });
});

// Adăugarea unui utilizator nou
router.post('/users', (req, res) => {
    const newUser = req.body;
    res.status(201).json({ message: "Utilizator adăugat", user: newUser });
});

// Actualizarea unui utilizator existent
router.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ message: `Utilizatorul cu ID-ul ${userId} a fost actualizat` });
});

// Ștergerea unui utilizator
router.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ message: `Utilizatorul cu ID-ul ${userId} a fost șters` });
});

module.exports = router;
