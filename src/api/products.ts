import {useFetch} from "@vueuse/core";
import {ref, toRefs, reactive, unref} from "vue";

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


export const useProducts=()=>{
    const productInfo:{list:Array<IProducts>;error:unknown,isFetching:boolean}=reactive({list:[],error:null,isFetching:false});
    const request=async ()=>{
        const { isFetching, error, data } = await useFetch('./src/mock/mockProducts.json').json();
        productInfo.list=data.value;
        productInfo.isFetching=isFetching.value;
        productInfo.error=error.value;
    }

    return {
        request,productInfo
    }
}

