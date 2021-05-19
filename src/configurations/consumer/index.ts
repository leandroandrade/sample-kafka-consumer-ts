import env from '../../env';

import { KafkaHelper } from '../kafka';
import { ConsumerKafka } from '../../consumer';

const consumer: ConsumerKafka = new ConsumerKafka(KafkaHelper.getConsumer(), env.listenerConfig);

export default consumer;
