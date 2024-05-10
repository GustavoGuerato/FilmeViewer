const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

let movies = [
  { id: 1, title: 'Movie 1', director: 'Director 1' },
  { id: 2, title: 'Movie 2', director: 'Director 2' },
  { id: 3, title: 'Movie 3', director: 'Director 3' },
];

// Rota GET para retornar todos os filmes
app.get('/api/movies', (req, res) => {
  res.json(movies);
});

// Rota GET para retornar um filme específico por ID
app.get('/api/movies/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const movie = movies.find((movie) => movie.id === id);

  if (!movie) {
    return res.status(404).json({ message: 'Filme não encontrado' });
  }

  res.json(movie);
});

// Rota POST para adicionar um novo filme
app.post('/api/movies', (req, res) => {
  const { title, director } = req.body;
  const id = movies.length + 1;
  const newMovie = { id, title, director };
  movies.push(newMovie);
  res.status(201).json(newMovie);
});

// Rota PUT para atualizar um filme existente
app.put('/api/movies/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, director } = req.body;
  const index = movies.findIndex((movie) => movie.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Filme não encontrado' });
  }

  movies[index] = { id, title, director };
  res.json(movies[index]);
});

// Rota DELETE para remover um filme
app.delete('/api/movies/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = movies.findIndex((movie) => movie.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Filme não encontrado' });
  }

  movies.splice(index, 1);
  res.status(204).end();
});

// Rota de exemplo para página inicial
app.get('/', (req, res) => {
  res.send('Bem-vindo à API RESTful de Filmes');
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor está rodando em http://localhost:${PORT}`);
});
