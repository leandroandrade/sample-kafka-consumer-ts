export class ConsumerClient {
    constructor() {
    }

    async handler({ topic, partition, message }: any): Promise<void> {
        console.log({ message: message.value.toString() });
    }
}
