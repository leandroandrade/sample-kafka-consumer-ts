import dotenv from 'dotenv';
import { array, boolean } from './helper';

if (process.env.NODE_ENV !== 'test') {
    dotenv.config();
}

export default {
    port: process.env.PORT,
    kafkaConfig: {
        clientId: process.env.CLIENT_ID,
        brokers: array(process.env.BROKERS),
    },
    consumerConfig: {
        groupId: process.env.GROUP_ID,
    },
    subscribeConfig: {
        topic: process.env.TOPIC,
        fromBeginning: boolean(process.env.READ_FROM_BEGINNING),
    },
    listenerConfig: {},
};
