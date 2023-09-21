import { Controller } from "@nestjs/common";
import { Get } from "@nestjs/common";
import { WhatsappService } from "./whatsapp.service";

@Controller('whatsapp')
export class WhatsappController {
    constructor(private _whatsappService: WhatsappService) {}

    @Get()
    async enviarMensagem() {
        return this._whatsappService.enviar();
    }
}