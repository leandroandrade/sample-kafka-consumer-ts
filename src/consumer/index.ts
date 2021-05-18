import { ConsumerClient } from './client';

export const listening = ({ env, consumer }: any) => {
    const client: ConsumerClient = new ConsumerClient();
    const configurations = {
        ...env.listenerConfig,
        eachMessage: client.handler,
    };
    consumer
        .run(configurations)
        .then(() => console.log('Consumer ready and listening...'))
        .catch((err) => console.error('Consumer error:', err));
};
