import FakeProductsRepository from '../repositories/fakes/FakeProductsRepository';
import CreateProductService from './CreateProductService';

let fakeProductsRepository: FakeProductsRepository;
let createProduct: CreateProductService;

describe('CreateProduct', () => {
  beforeEach(() => {
    fakeProductsRepository = new FakeProductsRepository();
    createProduct = new CreateProductService(fakeProductsRepository);
  });

  it('should be able to list all products', async () => {
    const product = await createProduct.execute({
      name: 'Produto 1',
      brand: 'Marca',
      description: 'Descrição',
      discount: 0,
      price: 100,
    });

    expect(product).toHaveProperty('id');
  });
});
