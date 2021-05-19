import { Consumer, Kafka } from 'kafkajs';

export const KafkaHelper = {
    consumer: null as Consumer,

    async connect({
        kafkaConfig,
        consumerConfig,
        subscribeConfig,
    }): Promise<void> {
        const kafka = new Kafka(kafkaConfig);
        const consumer = kafka.consumer(consumerConfig);
        await consumer.connect();
        await consumer.subscribe(subscribeConfig);

        console.log('Consumer connected on brokers!');

        this.consumer = consumer;
    },

    getConsumer(): Consumer {
        return this.consumer;
    },
};
