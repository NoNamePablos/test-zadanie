<script setup lang="ts">
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import type {Ref} from "vue";
import {useProducts} from "@/api/products";
import IProducts from "@/types/products";
import {watch} from "vue";
const route=useRoute();
const productID:Ref<number>=ref(-1)
const { isFetching, error, data } = useProducts();
const page:Ref<IProducts|undefined>=ref({})

watch(data, (newData) => {
  page.value=newData.at(productID.value);
});
onMounted(()=>{
  productID.value=Number(route.params?.id);
})


</script>
<template>
  <div class="detail">
    <div class="detail__container">
      <div class="detail-header">
        <router-link to="/">Назад</router-link>
      </div>
      <div class="detail-main">
        <div class="row">
          <div class="badge">{{page?.discount}}</div>
          <div class="detail-logo">
            <img :src="page?.logo_url" alt=""/>
          </div>
        </div>
        <div class="row">
          <div class="detail-preview">
            <img :src="page?.image_url" alt=""/>
          </div>
          <div class="detail-content">
            <div class="detail-content__title">{{ page?.name }}</div>
            <div class="detail-rating">
              <div class="rating">
                <div class="rating-item"></div>
                <div class="rating-item"></div>
                <div class="rating-item"></div>
                <div class="rating-item"></div>
                <div class="rating-item"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="price-item is-old">
            <div class="price-item__value">{{ page?.old_price }}</div>
            <div class="price-item__text">Старая цена</div>
          </div>
          <div class="price-item">
            <div class="price-item__value">{{ page?.new_price }}</div>
            <div class="price-item__text">Цена по акции</div>
          </div>
        </div>
      </div>
      <div class="detail-disclaimer">
        <div class="detail-description">
          {{page?.disclaimer}}
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
