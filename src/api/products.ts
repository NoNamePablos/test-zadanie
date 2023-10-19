import {useFetch} from "@vueuse/core";
import {ref, toRefs, reactive, unref,} from "vue";
import type {Ref} from 'vue'

export default interface IProducts {
    name?: string;
    image_url?: string;
    logo_url?: string;
    category?: string;
    views?: number;
    start_date?: string;
    end_date?: string;
    discount?: string;
    stars?: number;
    old_price?: string;
    disclaimer?: string;
    new_price?: string;
}

export interface IProductFetch {
    isFetching: Ref<Boolean>;
    error: Ref<unknown>;
    data: IProducts[];

}

export const useProducts = (): { data: Ref<IProducts[]>; isFetching: Ref<boolean>; error: Ref<any> } => {
    /*let data1:Ref<IProducts[]>=ref([]);
    let data:Ref<IProducts[]>=ref([]);*/
    const {isFetching, error, data} = useFetch<IProducts[]>('./src/mock/mockProducts.json').json();
    console.log(typeof data);
    /*useFetch('./src/mock/mockProducts.json').json().then(rs=>{
        return rs.data;
    }).then((rs)=>{
     data.value=rs.value;
    });*/
    /*  fetch('./src/mock/mockProducts.json').then((res)=>{
          return res.json()
      }).then((res)=>{
          data.value=res;
      });*/


    return {
        isFetching, error, data
    }
}

