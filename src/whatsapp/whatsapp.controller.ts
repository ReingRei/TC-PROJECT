import { Body, Controller, Post, Request } from "@nestjs/common";
import { Get } from "@nestjs/common";
import { WhatsappService } from "./whatsapp.service";
import { WhatsappPayloadDto } from "./whatsapp.dto";

@Controller('whatsapp')
export class WhatsappController {
    constructor(private _whatsappService: WhatsappService) { }

    @Get()
    async enviarMensagem() {
        return this._whatsappService.enviar();
    }

    @Get('webhook')
    teste(@Request() request, @Body() body) {
        return request?.query['hub.challenge'];
    }

    @Post('webhook')
    webhook(@Request() request, @Body() body) {
        const value: WhatsappPayloadDto = body.entry[0].changes[0].value;
        console.log(value.contacts[0])
        return true;
    }
}