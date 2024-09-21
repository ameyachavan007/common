import { CustomError } from "./custom-error";

export class DatabaseConnectionError extends CustomError {
    statusCode: number = 500;
    reason: string = "Failed to connect to database";

    constructor() {
        super('Error connecting to dB');
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }

    serializeErrors() {
        return [{ message: this.reason }];
    }
} 