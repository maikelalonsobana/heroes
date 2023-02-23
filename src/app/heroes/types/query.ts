export interface Query {
  limit: number;
  page: number;
  totalItems: number;
  sort?: string;
  order?: string;
  filter?: string;

}
