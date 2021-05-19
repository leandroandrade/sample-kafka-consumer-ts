import express from 'express';
import 'express-async-errors';
import setUp from '../setup';
import setRoutes from '../routes';

const app = express();

setUp(app);
setRoutes(app);

export default app;
