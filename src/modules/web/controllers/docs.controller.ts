import { BaseController } from '../../../base/controllers/base.controller';
import {Controller, Get, Render} from "@nestjs/common";

@Controller('docs')
export class DocsController extends BaseController {
    @Get('/')
    @Render('web/docs/form')
    form() {
        return {};
    }
}
