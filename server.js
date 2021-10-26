const app = require('./app');

const PORT = 8000;

app.listen(PORT, () => {
    console.log('--> Group A API');
    console.log(`--> Listening at http://localhost:${PORT}`);
});