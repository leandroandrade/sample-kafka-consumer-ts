import env from './env';
import { KafkaHelper } from './configurations/kafka';

Promise.all([KafkaHelper.connect(env)])
    .then(async () => {
        const app = (await import('./configurations/app')).default;
        app.listen(3000, () => console.log('Server running at port 3000'));

        const consumer = (await import('./configurations/consumer')).default;
        consumer.listen()
            .then(() => console.log('Consumer ready and listening...'))
            .catch((err) => console.error('Consumer error:', err));

        // ShutdownHelper.exit(consumer);
    })
    .catch((err) => console.error(err));
