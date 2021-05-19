import { Consumer } from 'kafkajs';
import { ConsumerClient } from './consumer-client';

export class ConsumerKafka {
    constructor(
        private readonly consumer: Consumer,
        private readonly listenerConfig: Record<string, any>,
    ) {}

    async listen(): Promise<void> {
        const client: ConsumerClient = new ConsumerClient();

        const configurations = {
            ...this.listenerConfig,
            eachMessage: client.handler,
        };
        return this.consumer.run(configurations);
    }
}
