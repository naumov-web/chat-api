import {SimpleResponseInterface} from '../../../../base/contracts/simple-response.interface';

export interface AuthResponseInterface extends SimpleResponseInterface {
    token: string;
}