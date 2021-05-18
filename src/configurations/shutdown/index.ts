import { Consumer } from 'kafkajs';

const handle = (signal: string, consumer: Consumer) => {
    console.log(`[${signal}] Disconnecting Kafka broker...`);
    consumer.disconnect()
        .then(() => {
            console.log('Consumer disconnected successful!');
            process.exit(0);
        }).catch((err) => console.error(err));
};

export const exit = (consumer: Consumer): void => {
    ['SIGTERM', 'SIGINT'].forEach((signal) => process.on(signal, () => handle(signal, consumer)));
};
