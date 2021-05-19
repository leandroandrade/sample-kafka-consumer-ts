import env from './env';
import { ConsumerHelper } from './configurations/consumer';

Promise.all([ConsumerHelper.connect(env)])
    .then(async () => {
        const app = (await import('./configurations/app')).default;
        app.listen(3000, () => console.log('Server running at port 3000'));

        const consumer = (await import('./domain/consumers')).default;
        consumer.listen()
            .then(() => console.log('Consumer ready and listening...'))
            .catch((err) => console.error('Consumer error:', err));
    })
    .catch((err) => console.error(err));
