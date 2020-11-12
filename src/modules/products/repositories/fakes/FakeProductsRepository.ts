import { uuid } from 'uuidv4';
import ICreateProductDTO from '../../dtos/ICreateProductDTO';
import IFilterPaginatedDTO from '../../dtos/IFilterPaginatedDTO';
import Product from '../../entities/Product';
import IProductsRepository from '../IProductsRepository';

class FakeProductsRepository implements IProductsRepository {
  private products: Product[] = [];

  public async findAll({
    name,
  }: IFilterPaginatedDTO): Promise<[Product[], number]> {
    const products = this.products.filter(product =>
      product.name.includes(name),
    );

    return [products, this.products.length];
  }

  public async findById(id: string): Promise<Product | undefined> {
    const productFind = this.products.find(product => product.id === id);

    return productFind;
  }

  public async create({
    name,
    brand,
    description,
    price,
    discount,
  }: ICreateProductDTO): Promise<Product> {
    const product = new Product();

    Object.assign(product, {
      id: uuid(),
      name,
      brand,
      description,
      price,
      discount,
    });

    this.products.push(product);

    return product;
  }
}

export default FakeProductsRepository;
