import env from './configurations/env';
import { KafkaHelper } from './configurations/kafka';

import { listening } from './consumer';


Promise.all([KafkaHelper.connect(env)])
    .then(([consumer]) => {
        console.log('Consumer connected on brokers!');

        listening({env, consumer});
    })
    .catch(err => console.error(err));
