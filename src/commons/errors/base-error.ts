export class BaseError extends Error {
    readonly statusCode: number;

    constructor(message: string, statusCode: number, name: string) {
        super(message);

        this.statusCode = statusCode || 400;
        this.name = name;
    }
}
