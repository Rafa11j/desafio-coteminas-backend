import { Request, Response } from 'express';
import ProductsRepository from '../repositories/ProductsRepository';
import ListAllProductsPaginatedService from '../services/ListAllProductsPaginatedService';

class ProductsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { page, elementsPerPage, name } = request.query;
    const productsRepository = new ProductsRepository();
    const productsService = new ListAllProductsPaginatedService(
      productsRepository,
    );

    const products = await productsService.execute({
      elementsPerPage: parseInt(String(elementsPerPage), 10),
      name: name === undefined ? '' : String(name),
      page: parseInt(String(page), 10),
    });

    return response.json(products);
  }
}

export default ProductsController;
