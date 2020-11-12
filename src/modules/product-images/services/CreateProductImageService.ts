import fs from 'fs';
import { resolve } from 'path';
import IProductsRepository from '../../products/repositories/IProductsRepository';
import AppError from '../../../app/errors/AppError';
import IProductsImagesRepository from '../repositories/IProductsImagesRepository';
import uploadConfig from '../../../config/upload';
import ProductImages from '../entities/ProductImages';

interface IRequest {
  filename: string;
  subtitle: string;
  product_id: string;
}

class CreateProductImageService {
  private productsImagesRepository: IProductsImagesRepository;

  private productsRepository: IProductsRepository;

  constructor(
    productsImagesRepository: IProductsImagesRepository,
    productsRepository: IProductsRepository,
  ) {
    this.productsImagesRepository = productsImagesRepository;
    this.productsRepository = productsRepository;
  }

  public async execute({
    filename,
    product_id,
    subtitle,
  }: IRequest): Promise<ProductImages> {
    const verifyProduct = await this.productsRepository.findById(product_id);

    if (!verifyProduct) {
      throw new AppError('Product not found!', 400);
    }

    await fs.promises.rename(
      resolve(uploadConfig.tmpFolder, filename),
      resolve(uploadConfig.uploadsFolder, filename),
    );

    const productImage = await this.productsImagesRepository.create({
      path: filename,
      product_id,
      subtitle,
    });

    return productImage;
  }
}

export default CreateProductImageService;
