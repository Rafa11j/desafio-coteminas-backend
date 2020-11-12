import IProductsRepository from '../repositories/IProductsRepository';

interface IRequest {
  elementsPerPage: number;
  page: number;
  name: string;
}

interface IDataList {
  id: string;
  name: string;
  brand: string;
  description: string;
  price: number;
  discount: number;
  priceDiscount: number;
  images: string[];
}

interface IResponse {
  data: IDataList[];
  totalElements: number;
  page: number;
  elements: number;
  elementsPerPage: number;
  totalPages: number;
  firstPage: boolean;
  lastPage: boolean;
}

class ListAllProductsPaginatedService {
  private productsRepository: IProductsRepository;

  constructor(productsRepository: IProductsRepository) {
    this.productsRepository = productsRepository;
  }

  public async execute({
    elementsPerPage,
    name,
    page,
  }: IRequest): Promise<IResponse> {
    const [products, count] = await this.productsRepository.findAll({
      elementsPerPage,
      name,
      page: page * elementsPerPage,
    });

    const totalPages = Math.ceil(count / elementsPerPage);

    const data: IDataList[] = products.map(product => ({
      id: product.id,
      name: product.name,
      brand: product.brand,
      description: product.description,
      price: product.price,
      discount: product.discount,
      priceDiscount: product.price - (product.price * product.discount) / 100,
      images: product.images.map(
        image => `${process.env.API_URL}/files/${image.path}`,
      ),
    }));

    const response: IResponse = {
      data,
      totalElements: count,
      page,
      elements: products.length,
      elementsPerPage,
      totalPages,
      firstPage: page === 0,
      lastPage: page === totalPages - 1,
    };
    return response;
  }
}

export default ListAllProductsPaginatedService;
