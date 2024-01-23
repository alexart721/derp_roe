// Import styling - begin
import '@/assets/lara-dark-amber/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.scss';
// Import styling - end

import App from '@/App.vue';
import PrimeVue from 'primevue/config';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from '@/router';

// Import PrimeVue components - begin
import Button from 'primevue/button';
import Card from 'primevue/card';
import Fieldset from 'primevue/fieldset';
import InputText from 'primevue/inputtext';
import Menubar from 'primevue/menubar';
// Import PrimeVue components -end

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);

// Register PrimeVue components - begin
app.component('PvButton', Button);
app.component('PvCard', Card);
app.component('PvFieldset', Fieldset);
app.component('PvInputText', InputText);
app.component('PvMenubar', Menubar);
// Register PrimeVue components - end
app.mount('#app');
