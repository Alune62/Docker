const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.urlencoded({ extended: true }));

// Connexion à la base via les variables d'environnement Docker
const db = mysql.createPool({
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'secret',
  database: process.env.DB_NAME || 'blog'
});

// Création automatique de la table au démarrage
db.query(`CREATE TABLE IF NOT EXISTS articles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titre VARCHAR(255) NOT NULL
)`);

app.get('/', (req, res) => {
  db.query('SELECT * FROM articles', (err, results) => {
    if (err) return res.send('Erreur de connexion à la BDD');
    
    let html = '<h1>Mon Blog Docker</h1><ul>';
    results.forEach(art => html += `<li>${art.titre}</li>`);
    html += '</ul>';
    html += '<form method="POST" action="/add"><input name="titre" placeholder="Nouveau titre"><button>Ajouter</button></form>';
    
    res.send(html);
  });
});

app.post('/add', (req, res) => {
  db.query('INSERT INTO articles (titre) VALUES (?)', [req.body.titre], () => {
    res.redirect('/');
  });
});

app.listen(3000, () => console.log('App lancée sur le port 3000'));