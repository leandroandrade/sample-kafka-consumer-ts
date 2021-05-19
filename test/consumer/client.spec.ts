import { Handler } from '../../src/services/consumer/handler';

describe('client-consumer-tests', () => {
    test('should run processData', async () => {
        const client: Handler = new Handler();
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
