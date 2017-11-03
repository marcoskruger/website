export class Product {
    id: string;
    name: string;
    price?: number;
    inactive?: boolean;
    barCode?: string;
    minStock?: number;
    maxStock?: number;
    description: string;
    img: string;
}
