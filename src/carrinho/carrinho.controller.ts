import { Controller, Query, Get } from "@nestjs/common";
import { CarrinhoService } from "./carrinho.service";

@Controller('carrinho')
export class CarrinhoController {
    constructor(private _carrinhoService: CarrinhoService) { }

    @Get('produto')
    encontrarProduto(@Query() { termo }) {
        if (!termo) {
            throw new Error('O termo é obrigatório')
        }
        // return this._carrinhoService.encontrarPorduto(termo);
    }
}