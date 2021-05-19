import { Consumer } from 'kafkajs';
import { Client } from './client';

export class ConsumerService {
    constructor(
        private readonly consumer: Consumer,
        private readonly listenerConfig: Record<string, any>,
    ) {}

    async listen(): Promise<void> {
        const client: Client = new Client();

        const configurations = {
            ...this.listenerConfig,
            eachMessage: client.handler,
        };
        return this.consumer.run(configurations);
    }
}
