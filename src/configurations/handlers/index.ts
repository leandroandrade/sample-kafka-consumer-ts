import errorHandler from './error-handler';
import responseErrorHandler from './response-error-handler';

export default (app): void => {
    app.use(errorHandler);
    app.use(responseErrorHandler);
};
