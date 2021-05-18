import { processData } from './client';

export const listening = ({ env, consumer }: any) => {
    const configurations = {
        ...env.listenerConfig,
        eachMessage: processData,
    };

    consumer
        .run(configurations)
        .then(() => console.log('Consumer ready and listening...'))
        .catch((err) => console.error('Consumer error:', err));
};
