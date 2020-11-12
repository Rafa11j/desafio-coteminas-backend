import { Router } from 'express';
import productsRouter from '../../modules/products/routes';
import productsImagesRouter from '../../modules/product-images/rotues';

const routes = Router();
const prefix = '/api/v1';

routes.get('/', (request, response) => {
  return response.json({ message: 'Desafio Coteminas' });
});

routes.use(`${prefix}/products`, productsRouter);
routes.use(`${prefix}/products-images`, productsImagesRouter);

export default routes;
