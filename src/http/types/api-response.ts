export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: Error;
  now?: Date;
}
