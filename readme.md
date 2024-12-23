# 🧠 Quiz Generator Web App

## 📚 Descrizione
Quiz Generator è una web app dinamica che permette di generare quiz interattivi partendo da un file JSON predefinito. L'applicazione è progettata per offrire un'esperienza utente intuitiva, dove gli utenti possono rispondere alle domande, ricevere feedback immediato e ottenere un punteggio finale al termine del quiz.

## 🚀 Funzionalità Principali
- **Generazione Dinamica di Quiz:** Inserisci un JSON che rispetta un formato specifico e l'app creerà automaticamente le domande.
- **Interattività Totale:** Gli utenti possono selezionare risposte, visualizzare suggerimenti (se disponibili) e navigare facilmente tra le domande.
- **Calcolo Punteggio Finale:** Al termine del quiz, l'app mostrerà un riepilogo delle risposte corrette e il punteggio finale.

## 🛠️ Formato JSON di Esempio
```json
{
  "quizTitle": "Esempio di Quiz",
  "questions": [
    {
      "question": "Qual è la capitale della Francia?",
      "options": ["Berlino", "Madrid", "Parigi", "Roma"],
      "correctAnswer": "Parigi"
    },
    {
      "question": "Quanto fa 2 + 2?",
      "options": ["3", "4", "5"],
      "correctAnswer": "4"
    }
  ]
}
```

## 💻 Tecnologie Utilizzate
- **Frontend:** React.js & Redux.js
- **Stile:** Tailwind CSS

## 📦 Installazione
1. Clona il repository:
   ```bash
   git clone https://github.com/tuo-utente/quiz-generator.git
   ```
2. Installa le dipendenze:
   ```bash
   npm install
   ```
3. Avvia il progetto:
   ```bash
   npm start
   ```

## 🌐 Utilizzo
1. Carica un file JSON conforme al formato specificato.
2. Inizia il quiz e rispondi alle domande.
3. Visualizza il punteggio finale.

## 🤝 Contributi
Sono benvenuti contributi di qualsiasi tipo! Apri una issue o invia una pull request.

## 📄 Licenza
Questo progetto è distribuito sotto licenza **MIT**.

## 📈 Chart

<img src='./Chart quizApp.png'>

---
**✨ Buon divertimento con i tuoi quiz!**