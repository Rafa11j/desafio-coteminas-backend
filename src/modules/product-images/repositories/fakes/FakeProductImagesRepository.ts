import { uuid } from 'uuidv4';
import ICreateProductImageDTO from '../../dtos/ICreateProductImageDTO';
import ProductImages from '../../entities/ProductImages';
import IProductsImagesRepository from '../IProductsImagesRepository';

class FakeProductImagesReposirory implements IProductsImagesRepository {
  private productImages: ProductImages[] = [];

  public async create({
    path,
    product_id,
    subtitle,
  }: ICreateProductImageDTO): Promise<ProductImages> {
    const productImage = new ProductImages();
    Object.assign(productImage, { id: uuid(), path, product_id, subtitle });

    this.productImages.push(productImage);

    return productImage;
  }
}

export default FakeProductImagesReposirory;
