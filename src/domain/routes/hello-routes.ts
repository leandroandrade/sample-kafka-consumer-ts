import { Router } from 'express';

export default (router: Router): void => {
    router.get('/healthcheck', (req, res) => res.send('UP'));
};
