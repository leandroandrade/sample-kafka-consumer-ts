import env from './configurations/env';
import { KafkaHelper } from './configurations/kafka';

Promise.all([KafkaHelper.connect(env)])
    .then(async ([consumer]) => {
        console.log('Consumer connected on brokers!');

        (await import('./configurations/app')).default({ env, consumer });
    })
    .catch((err) => console.error(err));
