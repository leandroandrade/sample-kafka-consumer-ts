import { Consumer } from 'kafkajs';
import { KafkaHelper } from '../kafka';

export const ConsumerHelper = {
    client: null as Consumer,

    async connect(env:any):Promise<void> {
        const kafka = KafkaHelper.instance(env);

        const client = kafka.consumer(env.consumerConfig);
        await client.connect();
        await client.subscribe(env.subscribeConfig);

        console.log('Consumer connected on brokers!');

        this.client = client;
    },

    consumer(): Consumer {
        return this.client;
    },
};
