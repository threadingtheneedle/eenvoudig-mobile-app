const express = require('express');
const app     = express();
const PORT    = 3000;

app.use(express.static('public'));

app.set('view engine', 'ejs');

// Stap 2: Een route maken
// Wanneer iemand naar "/" gaat, stuur je "Hello World!" terug
app.get('/', (red, res,) =>{
res.render('index');
});

app.get('/jug', (red, res,) =>{
res.render('jug');
});

// Stap 3: Server starten
app.listen(PORT, () => {
    console.log(`Server draait op http://localhost:${PORT}`);
});
