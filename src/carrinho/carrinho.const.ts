import { ProdutoDto } from "src/cardapio/cardapio.const";

export const Carrinhos: CarrinhoDto[] = [];

export class CarrinhoDto {
    id: number;
    telefone_id: number;
    nome_cliente: string;
    valor_itens: number;
    valor_entrega: number;
    valor_total: number;
    produtos: ProdutoDto[];
    endereco_entrega?: string;
    tipo_pedido: 'entrega' | 'retirada';
    forma_pagamento: string;
}
