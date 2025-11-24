
export type ApiPaginatedResponse<T> = {
  totalPages: number;
  totalElements: number;
  content: T[];
}

export interface ApiOneResponse<T> {
  error_message: string;
  status: boolean;
  content: T;
}
