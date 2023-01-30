import {ArgumentMetadata, HttpException, Injectable, PipeTransform, HttpStatus} from "@nestjs/common";
import {AnySchema, ValidationError, ValidationErrorItem} from 'joi';
import { ValidationErrorResponseInterface } from '../contracts/validation-error-response.interface';

@Injectable()
export class ValidationPipe implements PipeTransform {
    constructor(
       private schema: AnySchema,
       private isReturnErrors: boolean = false
    ) {}
    transform(value: unknown, metadata: ArgumentMetadata): any {
        const { error, value: parsedValue } = this.schema.validate(value, {
            convert: true,
            allowUnknown: true
        });

        if (error) {
            throw new HttpException(
                this.composeResponse(error),
                HttpStatus.BAD_REQUEST
            );
        }

        return parsedValue;
    }

    composeResponse(error: ValidationError): ValidationErrorResponseInterface {
        const result = {
            errors: []
        };

        if (error.details) {
            error.details.forEach((detail: ValidationErrorItem) => {
                result.errors.push({
                    fieldName: detail.context.key,
                    errors: [
                        detail.message
                    ]
                });
                console.log(detail);
            });
        }

        return result;
    }

}
