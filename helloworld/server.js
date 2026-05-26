const express = require('express');
const app     = express();
const PORT    = 3000;

app.use(express.static('public'));

// Stap 2: Een route maken
// Wanneer iemand naar "/" gaat, stuur je "Hello World!" terug
app.get('/', (req, res) => {
    res.send(`
        <head>
            <title>Hell</title>
            <script src="/js/javascript_real.js" defer></script>
        </head>
        <body>
            <header>
                header lol
            </header>
            <main>
                main lol
            </main>
            <footer>
                footer lolLOL
            </footer>
        </body>`);
});

app.get('/jug', (req, res) => {
    res.send('<h1>FUCK OFF</h1>');
});

// Stap 3: Server starten
app.listen(PORT, () => {
    console.log(`✅ Server draait op http://localhost:${PORT}`);
});
