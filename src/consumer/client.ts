export class ConsumerClient {
    constructor() {
    }

    processData({ topic, partition, message }: any): void {
        console.log({ message: message.value.toString() });
    }
}
