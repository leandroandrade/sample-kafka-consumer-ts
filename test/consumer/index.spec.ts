import * as consumer from '../../src/consumer';
import { ConsumerClient } from '../../src/consumer/client';

describe('consumer-tests', () => {
    test('should run consumer without listenerConfig', async () => {
        const client: ConsumerClient = new ConsumerClient();
        const env = { listenerConfig: {} };
        const params = {
            run: jest.fn().mockResolvedValue({}),
        };
        consumer.listening({ env, consumer: params });

        expect(params.run).toHaveBeenCalled();
        expect(params.run).toHaveBeenCalledWith({
            ...env.listenerConfig,
            eachMessage: client.handler,
        });
    });

    test('should run consumer with listenerConfig', async () => {
        const client: ConsumerClient = new ConsumerClient();
        const env = {
            listenerConfig: {
                autoCommit: true,
                autoCommitInterval: 1,
                autoCommitThreshold: 1,
                eachBatchAutoResolve: true,
                partitionsConsumedConcurrently: 0,
            },
        };
        const params = {
            run: jest.fn().mockResolvedValue({}),
        };
        consumer.listening({ env, consumer: params });

        expect(params.run).toHaveBeenCalled();
        expect(params.run).toHaveBeenCalledWith({
            ...env.listenerConfig,
            eachMessage: client.handler,
        });
    });
});
