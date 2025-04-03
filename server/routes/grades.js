const express = require('express');
const router = express.Router();

// Lista notelor
router.get('/grades', (req, res) => {
    res.json({ message: "Lista notelor" });
});

// Obținerea unei note după ID
router.get('/grades/:id', (req, res) => {
    const gradeId = req.params.id;
    res.json({ message: `Detalii pentru nota cu ID-ul ${gradeId}` });
});

// Adăugarea unei noi note
router.post('/grades', (req, res) => {
    const newGrade = req.body;
    res.status(201).json({ message: "Notă adăugată", grade: newGrade });
});

// Actualizarea unei note existente
router.put('/grades/:id', (req, res) => {
    const gradeId = req.params.id;
    res.json({ message: `Nota cu ID-ul ${gradeId} a fost actualizată` });
});

// Ștergerea unei note
router.delete('/grades/:id', (req, res) => {
    const gradeId = req.params.id;
    res.json({ message: `Nota cu ID-ul ${gradeId} a fost ștearsă` });
});

module.exports = router;
