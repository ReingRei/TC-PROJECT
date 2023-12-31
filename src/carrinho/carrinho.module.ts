import { Module } from "@nestjs/common";
import { CarrinhoController } from "./carrinho.controller";
import { CarrinhoService } from "./carrinho.service";

@Module({
    controllers: [CarrinhoController],
    providers: [CarrinhoService],
    imports: []
})
export class CarrinhoModule { }