import kafkajs from 'kafkajs';
import { KafkaHelper } from '../../../src/configurations/kafka';

jest.mock('kafkajs');

describe('kafka-connector-tests', () => {
    test('should connect', async () => {
        const connect = jest.fn().mockResolvedValue({});
        const subscribe = jest.fn().mockResolvedValue({});

        kafkajs.Kafka.prototype.consumer = jest.fn().mockImplementation(() => ({
            connect,
            subscribe,
        }));

        const params = {
            kafkaConfig: {},
            consumerConfig: {},
            subscribeConfig: {},
        };
        const consumer = await KafkaHelper.connect(params);
        expect(consumer).not.toBeNull();
        expect(consumer).not.toBeUndefined();
        expect(connect).toBeCalled();
        expect(subscribe).toBeCalled();
    });
});
