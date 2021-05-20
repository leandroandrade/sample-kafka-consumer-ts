import { BaseError } from './base-error';

export class InvalidInputError extends BaseError {
    constructor(message?: string, statusCode?: number) {
        super(message || 'Input error', statusCode, 'InvalidInputError');
    }
}
