import { Controller, Query, Get } from "@nestjs/common";
import { CardapioService } from "./cardapio.service";

@Controller('cardapio')
export class CardapioController {
    constructor(private _cardapioService: CardapioService) { }

    @Get('produto')
    encontrarProduto(@Query() { termo }) {
        if (!termo) {
            throw new Error('O termo é obrigatório')
        }
        return this._cardapioService.encontrarPorduto(termo);
    }
}