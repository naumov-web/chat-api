import {SimpleResponseInterface} from "../contracts/simple-response.interface";
import {HttpException, HttpStatus} from "@nestjs/common";

export class BaseController {
    getSuccessResponse(message: string): SimpleResponseInterface {
        return {
            success: true,
            message
        };
    }

    getErrorResponse(message: string, status: HttpStatus = HttpStatus.BAD_REQUEST): SimpleResponseInterface {
        throw new HttpException(
            {
                success: false,
                message
            },
            status
        );
    }
}