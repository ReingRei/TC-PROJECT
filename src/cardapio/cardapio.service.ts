import { Injectable } from "@nestjs/common";
import { Cardapio } from "./cardapio.const";

@Injectable()
export class CardapioService {
    cardapio = Cardapio;
    constructor() { }

    encontrarPorduto(termo: string) {
        const produtos_encontrados = this.cardapio.produtos.filter((produto) => {
            return this.filtrarTermo(termo, produto.nome);
        });

        return produtos_encontrados;
    }

    private filtrarTermo(termo: string, nome_produto): boolean {
        termo = termo.toUpperCase();
        nome_produto = nome_produto.toUpperCase();

        const busca1: string[] = termo.split(' ');

        const busca2: string[] = nome_produto.split(' ');

        let is_combina = false;
        for (const a of busca1) {
            for (const b of busca2) {
                is_combina = a === b
                if (is_combina) {
                    break;
                }
            }
            if (is_combina) {
                break;
            }
        }
        return is_combina;
    }
}