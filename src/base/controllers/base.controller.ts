import {SimpleResponseInterface} from "../contracts/simple-response.interface";

export class BaseController {
    getSuccessResponse(message: string): SimpleResponseInterface {
        return {
            success: true,
            message
        };
    }

    getErrorResponse(message: string): SimpleResponseInterface {
        return {
            success: false,
            message
        };
    }
}