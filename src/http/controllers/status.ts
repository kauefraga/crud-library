import { Request, Response } from 'express';
import { ApiResponse } from '../types/api-response';

export default async function StatusController(
  _: Request,
  response: Response<ApiResponse>,
) {
  const uptime = `${Math.floor(process.uptime())} seconds`;

  return response.status(200).json({
    success: true,
    data: {
      message: '💚 The API is working properly 💚',
      uptime,
      now: new Date(),
    },
  });
}
