import { ConsumerClient } from '../../src/consumer/consumer-client';

describe('client-consumer-tests', () => {
    test('should run processData', async () => {
        const client: ConsumerClient = new ConsumerClient();
        const params = {
            topic: 'simple-topic',
            partition: 0,
            message: {
                value: 'hello consumer',
            },
        };
        await client.handler(params);
    });
});
