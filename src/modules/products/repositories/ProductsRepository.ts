import { Repository, getRepository, Like } from 'typeorm';
import ICreateProductDTO from '../dtos/ICreateProductDTO';
import IFilterPaginatedDTO from '../dtos/IFilterPaginatedDTO';
import Product from '../entities/Product';
import IProductsRepository from './IProductsRepository';

class ProductsRepository implements IProductsRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  public async findAll({
    elementsPerPage,
    name,
    page,
  }: IFilterPaginatedDTO): Promise<[Product[], number]> {
    return this.ormRepository.findAndCount({
      skip: page,
      take: elementsPerPage,
      order: { name: 'ASC' },
      where: {
        name: Like(`%${name}%`),
      },
      relations: ['images'],
    });
  }

  public async findById(id: string): Promise<Product | undefined> {
    return this.ormRepository.findOne({
      where: { id },
    });
  }

  public async create({
    brand,
    description,
    discount,
    name,
    price,
  }: ICreateProductDTO): Promise<Product> {
    const product = this.ormRepository.create({
      brand,
      description,
      discount,
      name,
      price,
    });

    await this.ormRepository.save(product);
    return product;
  }
}

export default ProductsRepository;
