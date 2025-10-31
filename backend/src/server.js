import express from 'express';
import dotenv from 'dotenv';
import projectRoutes from './routes/projectRoutes.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/projects', projectRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Portfolio API running...' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
