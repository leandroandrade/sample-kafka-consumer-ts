import env from './env';
import { KafkaHelper } from './configurations/kafka';
import { ShutdownHelper } from './configurations/shutdown';

Promise.all([KafkaHelper.connect(env)])
    .then(async ([consumer]) => {
        console.log('Consumer connected on brokers!');

        (await import('./configurations/app'))
            .default({ env, consumer });
        ShutdownHelper.exit(consumer);
    })
    .catch((err) => console.error(err));
