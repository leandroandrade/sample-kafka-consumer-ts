import { listening } from '../../consumer';

export default ({
    env,
    consumer,
}: any) => {
    listening({
        env,
        consumer,
    });
};
