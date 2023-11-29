export class Product {
    id?: number;
    categoryId?: number;
    productName?: string;
    price?: number;

    constructor({id, category, productName, price}) {
        if(id !== null) this.id = id;
        if(category !== null) this.categoryId = category;
        if(productName !== null) this.productName = productName;
        if(price !== null) this.price = price;
    }
}