import App from './App.vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import router from './router';
import { createI18n } from 'vue-i18n';
import PrimeVue from 'primevue/config';
import Tailwind from 'primevue/passthrough/tailwind';
import ToastService from 'primevue/toastservice';
import '@/style.css';
// import pt from '@/pt'; Use this if you want to go completely unstyled

const i18n = createI18n({
  legacy: false,
});

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const toastSystem = {
  toast: {
    root: {
      class: ['w-256', 'opacity-90'],
    },
    container: ({ props }) => ({
      class: [
        'my-4 rounded-md w-full',
        {
          'bg-blue-100 border-solid border-0 border-l-4 border-blue-500 text-blue-700':
            props.message.severity == 'info',
          'bg-green-100 border-solid border-0 border-l-4 border-green-500 text-green-700':
            props.message.severity == 'success',
          'bg-orange-100 border-solid border-0 border-l-4 border-orange-500 text-orange-700':
            props.message.severity == 'warn',
          'bg-red-100 border-solid border-0 border-l-4 border-red-500 text-red-700':
            props.message.severity == 'error',
        },
      ],
    }),
    content: 'flex items-center py-5 px-7',
    icon: {
      class: ['w-6 h-6', 'text-lg mr-2'],
    },
    text: 'text-base font-normal flex flex-col flex-1 grow shrink ml-4',
    summary: 'font-bold block',
    detail: 'mt-1 block',
    closebutton: {
      class: [
        'w-8 h-8 rounded-full bg-transparent transition duration-200 ease-in-out',
        'ml-auto overflow-hidden relative',
        'flex items-center justify-center',
        'hover:bg-white/30',
      ],
    },
    transition: {
      enterFromClass: 'opacity-0 translate-x-0 translate-y-2/4 translate-z-0',
      enterActiveClass: 'transition-transform transition-opacity duration-300',
      leaveFromClass: 'max-h-40',
      leaveActiveClass: 'transition-all duration-500 ease-in',
      leaveToClass: 'max-h-0 opacity-0 mb-0 overflow-hidden',
    },
  },
};
app.use(i18n);
app.use(pinia);
app.use(router);
app.use(PrimeVue, { unstyled: true, pt: { Tailwind, ...toastSystem } }); // Remove pt (and primvue from tailwind's content) if you want to go completely unstyled
app.use(ToastService);

app.mount('#app');
