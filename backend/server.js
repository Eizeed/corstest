import express from 'express';
import path from 'path';

const app = express();

const products = [
  { id: 1, name: 'tomato' },
  { id: 2, name: 'cucumber' },
  { id: 3, name: 'kiwi' },
  { id: 4, name: 'coconut' },
];

app.get('/api/products', (req, res) => {
  res.status(200).json(products);
});

const __dirname = path.resolve()
app.use(express.static(path.join(__dirname, '/frontend/dist')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
})

app.listen(3000, () => console.log(`Server is running on port 3000`));
