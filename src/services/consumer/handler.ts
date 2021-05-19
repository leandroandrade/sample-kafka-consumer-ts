export class Handler {
    constructor() {
    }

    async handle({ topic, partition, message }: any): Promise<void> {
        console.log({ message: message.value.toString() });
    }
}
