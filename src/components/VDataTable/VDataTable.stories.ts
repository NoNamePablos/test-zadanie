import type { Meta, StoryFn, StoryObj } from '@storybook/vue3';
import VDataTable from '@/components/VDataTable/VDataTable.vue';
import { useProducts } from '@/api/products';
import VDataColumn from '@/components/VDataColumn/VDataColumn.vue';

export default {
  title: 'Table/VDataTable',
  component: VDataTable,
  tags: ['autodocs'],
} as Meta;
const Template: StoryFn = (args) => ({
  components: { VDataTable, VDataColumn },
  setup() {
    return { args };
  },

  template:
    '  <VDataTable v-bind="args">\n' +
    '        <VDataColumn field="image_url" header="Фото" :image="true" />\n' +
    '        <VDataColumn field="name" header="Название" />\n' +
    '        <VDataColumn field="views" header="Просмотры" />\n' +
    '        <VDataColumn field="start_date" header="Начало ротации" />\n' +
    '        <VDataColumn field="end_date" header="Конец ротации" />\n' +
    '      </VDataTable>',
});
const tempdata = [
  {
    id: 1,
    name: 'Сухой корм для взрослых собак мелких и карликовых пород',
    image_url:
      'https://4lapy.ru/resize/800x800/upload/iblock/714/7140b69c9d49dd89f1d35b1a99e27d18.jpg',
    logo_url:
      'https://myzoograd.ru/upload/iblock/f37/f3733a014d377f291a8d6968badaca27.jpg',
    category: 'Корм для животных',
    views: 12000,
    start_date: '2/22/2022',
    end_date: '8/22/2023',
    discount: '0',
    stars: 0,
    old_price: '555,99',
    disclaimer: 'Ваша собака будет счастлива',
  },
  {
    id: 2,
    name: 'Подушечки с фруктово-ягодным муссом ',
    image_url: 'https://menuprosto.ru/assets/Images/Recipe/RCP_5722.jpg',
    logo_url: 'https://www.nestlebaby.ru/images/nestle-baby-and-me.svg',
    category: 'Сухие завтраки',
    views: 1323,
    start_date: '1/1/2023',
    end_date: '12/1/2023',
    discount: '10',
    stars: 1,
    old_price: '445',
    new_price: '334,5',
  },
];

export const Default = {
  render: Template,
  args: {
    items: tempdata,
    itemPerPage: 1,
  },
};
