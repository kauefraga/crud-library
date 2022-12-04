import { Request, Response } from 'express';
import rateLimit from 'express-rate-limit';
import { ApiResponse } from '../types/api-response';

function limiter(
  _: Request,
  response: Response<ApiResponse>,
) {
  return response.status(429).json({
    success: false,
    data: {
      error: {
        name: 'Too many requests',
        message: 'Request limit exceeded',
      },
      now: new Date(),
    },
  });
}

enum Time {
  secInMs = 1000,
  minInMs = 60 * secInMs,
}

export const RequestLimiter = rateLimit({
  windowMs: 10 * Time.minInMs, // 10 minutes
  max: 50, // 50 reqs per `window` (here, each 10 minutes)
  handler: limiter,
});
