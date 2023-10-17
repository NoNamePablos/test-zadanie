<script lang="ts" setup>
import {useI18n} from 'vue-i18n';
export type AllowedTags =
    | 'text'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'month'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'url'
    | 'week';

export interface Props {
  label?: string;
  tip?:string;
  error?:boolean|string;
  modelValue:string;
  type?:AllowedTags;
  rightIcon?:boolean;
  leftIcon?:boolean;
}
withDefaults(defineProps<Props>(),{
  modelValue:'',
  tags:'text',
})
const emit=defineEmits<{
  'update:modelValue':[value:string];
}>();
const handleInput=(e:Event)=>{
  const  value=(e.target as HTMLInputElement).value;
  emit('update:modelValue',value);
}
/*const {t} = useI18n({
  locale: 'en',
  messages: {},
});*/
</script>

<template>
  <div class="input">
    <div  v-if="leftIcon" class="input-icon">
      <slot></slot>
    </div>
    <input
        :type="type"
        v-bind="$attrs"
        class="leading-1.5 block h-module mr-4  outline-none border-none  p-module  text-black placeholder:text-gray"
        :class="{
        'border-red': error,
      }"
        data-testid="input"
        :value="modelValue"
        @input="handleInput" />
    <div v-if="rightIcon" class="input-icon">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .input{
    @apply flex gap-4 h-32 rounded w-max border border-gray  px-8;
  }
  .input-icon{
    @apply text-gray w-16 items-center flex;
  }
</style>
