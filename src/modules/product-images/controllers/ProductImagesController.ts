import { Request, Response } from 'express';
import ProductsRepository from '../../products/repositories/ProductsRepository';
import ProductsImagesRepository from '../repositories/ProductsImagesRepository';
import CreateProductImageService from '../services/CreateProductImageService';

class ProductImagesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { product_id, subtitle } = request.body;
    const productsRepository = new ProductsRepository();
    const productsImageRepository = new ProductsImagesRepository();
    const productsImagesService = new CreateProductImageService(
      productsImageRepository,
      productsRepository,
    );

    const productImage = await productsImagesService.execute({
      filename: request.file.filename,
      product_id,
      subtitle,
    });

    return response.json(productImage);
  }
}

export default ProductImagesController;
