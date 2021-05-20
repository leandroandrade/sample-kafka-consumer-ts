import { BaseError } from './base-error';

export class ClientNotExistsError extends BaseError {
    constructor(message?: string, statusCode?: number) {
        super(
            message || 'Client not exists',
            statusCode,
            'ClientNotExistsError'
        );
    }
}
