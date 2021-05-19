import { Consumer } from 'kafkajs';
import { Handler } from './handler';

export class ConsumerService {
    constructor(
        private readonly consumer: Consumer,
        private readonly listenerConfig: Record<string, any>,
    ) {
    }

    async listen(): Promise<void> {
        const client: Handler = new Handler();
        return this.consumer.run({
            ...this.listenerConfig,
            eachMessage: client.handle,
        });
    }
}
