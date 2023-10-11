
export const Categorias = [
    {
        id: 1,
        nome: 'Pizza Salgada'
    }
]

export const Produtos = [
    {
        id: 1,
        nome: 'Pizza de mussarela',
        valor: 2000,
        categoria: 1
    }
]

export const Cardapio = {
    categorias: Categorias,
    produtos: Produtos
}

export class CardapioDto {
    categorias: CategoriaDto[];
    produtos: ProdutoDto[];
}

export class ProdutoDto {
    id: number;
    nome: string;
    valor: number;
    categoria: number;
}

export class CategoriaDto {
    id: number;
    nome: string;
}