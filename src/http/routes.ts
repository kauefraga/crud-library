import { Router } from 'express';
import HelloController from './controllers/hello';
import StatusController from './controllers/status';
import { GetBooksController } from './controllers/books/get';
import { GetBookByIdController } from './controllers/books/get-by-id';
import { CreateBookController } from './controllers/books/create';
import { UpdateBookByTitleController } from './controllers/books/update-by-title';
import { DeleteBookByTitleController } from './controllers/books/delete-by-title';

const router = Router();

router.get('/v1', HelloController);

router.get('/v1/status', StatusController);

router.get('/v1/books', GetBooksController);

router.get('/v1/books/:bookId', GetBookByIdController);

router.post('/v1/books', CreateBookController);

router.put('/v1/books', UpdateBookByTitleController);

router.delete('/v1/books', DeleteBookByTitleController);

export { router };
