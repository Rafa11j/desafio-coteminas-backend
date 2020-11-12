import FakeProductsRepository from '../repositories/fakes/FakeProductsRepository';
import ListAllProductsPaginatedService from './ListAllProductsPaginatedService';
import FakeProductImagesRepository from '../../product-images/repositories/fakes/FakeProductImagesRepository';

let fakeProductsRepository: FakeProductsRepository;
let fakeProductImagesRepository: FakeProductImagesRepository;
let listAllProductsPaginated: ListAllProductsPaginatedService;

describe('ListAllProductsPaginated', () => {
  beforeEach(() => {
    fakeProductsRepository = new FakeProductsRepository();
    fakeProductImagesRepository = new FakeProductImagesRepository();
    listAllProductsPaginated = new ListAllProductsPaginatedService(
      fakeProductsRepository,
    );
  });

  it('should be able to list all products', async () => {
    const product1 = await fakeProductsRepository.create({
      name: 'Produto 1',
      brand: 'Marca',
      description: 'Descrição',
      discount: 0,
      price: 100,
    });

    const product2 = await fakeProductsRepository.create({
      name: 'Produto 2',
      brand: 'Marca',
      description: 'Descrição',
      discount: 0,
      price: 100,
    });

    const product3 = await fakeProductsRepository.create({
      name: 'Produto 3',
      brand: 'Marca',
      description: 'Descrição',
      discount: 0,
      price: 100,
    });

    const image1 = await fakeProductImagesRepository.create({
      path: 'd9e145279ab27cc469a6-cama.jpg',
      product_id: product1.id,
      subtitle: 'Legenda 1',
    });

    const image2 = await fakeProductImagesRepository.create({
      path: 'd9e145279ab27cc469a6-cama.jpg',
      product_id: product1.id,
      subtitle: 'Legenda 1',
    });

    const image3 = await fakeProductImagesRepository.create({
      path: 'd9e145279ab27cc469a6-cama.jpg',
      product_id: product2.id,
      subtitle: 'Legenda 1',
    });

    const image4 = await fakeProductImagesRepository.create({
      path: 'd9e145279ab27cc469a6-cama.jpg',
      product_id: product2.id,
      subtitle: 'Legenda 1',
    });

    const image5 = await fakeProductImagesRepository.create({
      path: 'd9e145279ab27cc469a6-cama.jpg',
      product_id: product3.id,
      subtitle: 'Legenda 1',
    });

    const image6 = await fakeProductImagesRepository.create({
      path: 'd9e145279ab27cc469a6-cama.jpg',
      product_id: product3.id,
      subtitle: 'Legenda 1',
    });

    product1.images = [image1, image2];
    product2.images = [image3, image4];
    product3.images = [image5, image6];

    const products = await listAllProductsPaginated.execute({
      elementsPerPage: 10,
      name: '',
      page: 0,
    });

    // expect(products).toHaveProperty('data');

    expect(products.elementsPerPage).toBe(10);
    expect(products.elements).toBe(3);
    expect(products.firstPage).toBe(true);
    expect(products.lastPage).toBe(true);
    expect(products.totalPages).toBe(1);
    expect(products.totalPages).toBe(1);
    expect(products.page).toBe(0);
  });
});
