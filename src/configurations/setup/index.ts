import express, { Express } from 'express';
// import cors from 'cors';
// import helmet from 'helmet';

export default (app: Express): void => {
    // app.use(cors());
    // app.use(helmet());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
};
