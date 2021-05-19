import env from '../../env';
import { ConsumerHelper } from '../../configurations/consumer';
import { ConsumerService } from '../../services/consumer';

const consumer = ConsumerHelper.consumer();
const client: ConsumerService = new ConsumerService(consumer, env.listenerConfig);

export default client;
