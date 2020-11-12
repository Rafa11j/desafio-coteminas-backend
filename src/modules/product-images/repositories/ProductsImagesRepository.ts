import { Repository, getRepository } from 'typeorm';
import ICreateProductImageDTO from '../dtos/ICreateProductImageDTO';
import ProductImages from '../entities/ProductImages';
import IProductsImagesRepository from './IProductsImagesRepository';

class ProductsImagesRepository implements IProductsImagesRepository {
  private ormRepository: Repository<ProductImages>;

  constructor() {
    this.ormRepository = getRepository(ProductImages);
  }

  public async create({
    path,
    product_id,
    subtitle,
  }: ICreateProductImageDTO): Promise<ProductImages> {
    const productImage = this.ormRepository.create({
      path,
      product_id,
      subtitle,
    });

    await this.ormRepository.save(productImage);

    return productImage;
  }
}

export default ProductsImagesRepository;
