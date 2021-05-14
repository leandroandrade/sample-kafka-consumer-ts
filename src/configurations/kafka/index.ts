import { Consumer, Kafka } from 'kafkajs';

export const KafkaHelper = {
    async connect(env: any): Promise<Consumer> {
        const kafka = new Kafka(env.kafkaConfig);
        const consumer = kafka.consumer(env.consumerConfig);
        await consumer.connect();
        await consumer.subscribe(env.subscribeConfig);

        return consumer;
    },
};
