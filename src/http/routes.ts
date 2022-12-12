import { Router } from 'express';
import HelloController from './controllers/hello';
import StatusController from './controllers/status';
import { GetBooksController } from './controllers/books/get';
import { GetBookByIdController } from './controllers/books/get-by-id';
import { CreateBookController } from './controllers/books/create';
import { UpdateBookByIdController } from './controllers/books/update-by-id';
import { DeleteBookByTitleController } from './controllers/books/delete-by-title';

const router = Router();

router.get('/v1', HelloController);

router.get('/v1/status', StatusController);

router.get('/v1/books', GetBooksController);

router.get('/v1/books/:bookId', GetBookByIdController);

router.post('/v1/books', CreateBookController);

router.put('/v1/books/:bookId', UpdateBookByIdController);

router.delete('/v1/books', DeleteBookByTitleController);

export { router };
