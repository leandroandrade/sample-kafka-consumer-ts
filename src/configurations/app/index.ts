import express from 'express';
import 'express-async-errors';
import setHanders from '../handlers';
import setUp from '../setup';
import setRoutes from '../routes';

const app = express();

setUp(app);
setRoutes(app);
setHanders(app);

export default app;
