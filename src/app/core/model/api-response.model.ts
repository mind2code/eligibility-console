
export type ApiPaginatedResponse<T> = {
  total_pages: number
  message: string,
  total_items: number,
  current_page: number,
  status: boolean,
  page_size: number
  data: T[];
}

export interface ApiOneResponse<T> {
  message: string,
  status: boolean;
  data: T;
}
