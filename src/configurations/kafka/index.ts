import { Kafka } from 'kafkajs';

export const KafkaHelper = {
    instance({ kafkaConfig }): Kafka {
        return new Kafka(kafkaConfig);
    },
};
