import ICreateProductImageDTO from '../dtos/ICreateProductImageDTO';
import ProductImages from '../entities/ProductImages';

export default interface IProductsImagesRepository {
  create(data: ICreateProductImageDTO): Promise<ProductImages>;
}
