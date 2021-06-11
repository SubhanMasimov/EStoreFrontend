import { Brand } from './brand';
import { BaseEntityModel } from './baseEntityModel';
import { Category } from './category';

export interface Product extends BaseEntityModel {

    categoryId: number
    category: Category
    brandId: number
    brand: Brand
    name: string
    code: string
    stock: number
    price: number
}