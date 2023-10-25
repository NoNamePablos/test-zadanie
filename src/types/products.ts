import type { Ref } from 'vue';

export default interface IProducts {
  id?: number;
  name?: string;
  image_url?: string;
  logo_url?: string;
  category?: string;
  views?: number;
  start_date?: string;
  end_date?: string;
  discount?: string;
  stars?: number;
  old_price?: string | string[];
  disclaimer?: string;
  new_price?: string | string[];
}

export interface IProductsResult {
  data: Ref<IProducts[]>;
  isFetching: Ref<boolean>;
  error: Ref<any>;
}
