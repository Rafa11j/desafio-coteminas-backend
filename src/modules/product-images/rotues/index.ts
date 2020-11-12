import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../../../config/upload';
import ProductImagesController from '../controllers/ProductImagesController';

const productsImagesRoutes = Router();
const productImagesController = new ProductImagesController();

const upload = multer(uploadConfig);

productsImagesRoutes.post(
  '/',
  upload.single('file'),
  productImagesController.create,
);

export default productsImagesRoutes;
