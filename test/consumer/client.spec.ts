import * as client from '../../src/consumer/client';

describe('client-consumer-tests', () => {
    test('should run processData', async () => {
        const params = {
            topic: 'simple-topic',
            partition: 0,
            message: {
                value: 'hello consumer',
            },
        };
        await client.processData(params);
    });
});
