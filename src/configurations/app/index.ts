import { Consumer } from 'kafkajs';
import { listening } from '../../consumer';

namespace App {
    export type Params = {
        env: Record<string, any>;
        consumer: Consumer
    }
}

export default ({ env, consumer }: App.Params) => {
    listening({ env, consumer });
};
