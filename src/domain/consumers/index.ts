import env from '../../env';
import { ConsumerHelper } from '../../configurations/consumer';
import { ConsumerKafka } from '../../consumer';

const consumer = ConsumerHelper.consumer();
const client: ConsumerKafka = new ConsumerKafka(consumer, env.listenerConfig);

export default client;
