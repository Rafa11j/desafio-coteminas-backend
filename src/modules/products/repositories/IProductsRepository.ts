import ICreateProductDTO from '../dtos/ICreateProductDTO';
import IFilterPaginatedDTO from '../dtos/IFilterPaginatedDTO';
import Product from '../entities/Product';

export default interface IProductsRepository {
  findAll(data: IFilterPaginatedDTO): Promise<[Product[], number]>;
  findById(id: string): Promise<Product | undefined>;
  create(data: ICreateProductDTO): Promise<Product>;
}
