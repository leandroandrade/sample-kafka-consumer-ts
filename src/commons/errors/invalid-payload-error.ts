import { BaseError } from './base-error';

export class InvalidPayloadError extends BaseError {
    constructor(message?: string, statusCode?: number) {
        super(message || 'Payload error', statusCode, 'InvalidPayloadError');
    }
}
