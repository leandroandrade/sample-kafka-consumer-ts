import { processData } from './client';

export const listening = ({ env, consumer }: any) => {
    consumer
        .run({
            ...env.listenerConfig,
            eachMessage: processData,
        })
        .then(() => console.log('Consumer ready and listening...'))
        .catch((err) => console.error('Consumer error:', err));
};
