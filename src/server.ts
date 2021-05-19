import env from './env';
import { ConsumerHelper } from './configurations/consumer';

Promise.all([ConsumerHelper.connect(env)])
    .then(async () => {
        const consumer = (await import('./domain/consumers')).default;
        consumer.listen().then(async () => {
            console.log('Consumer ready and listening...');

            const app = (await import('./configurations/app')).default;
            app.listen(env.port, () => {
                console.log(`Server running at port ${env.port}`);
            });
        }).catch((err) => console.error('Consumer error:', err));
    }).catch((err) => console.error(err));
