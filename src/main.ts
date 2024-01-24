// Import styling - begin
import 'primevue/resources/themes/lara-dark-amber/theme.css';
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
import Chip from 'primevue/chip';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import DataTable from 'primevue/datatable';
import Dialog from 'primevue/dialog';
import Fieldset from 'primevue/fieldset';
import InputText from 'primevue/inputtext';
import Menubar from 'primevue/menubar';
import Row from 'primevue/row';
import Toast from 'primevue/toast';
import Toolbar from 'primevue/toolbar';
// Import PrimeVue components - end

// Import PrimeVue services - start
import ToastService from 'primevue/toastservice';
// Import PrimeVue services - end

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);
app.use(ToastService);

// Register PrimeVue components - begin
app.component('PvButton', Button);
app.component('PvCard', Card);
app.component('PvChip', Chip);
app.component('PvColumn', Column);
app.component('PvColumnGroup', ColumnGroup);
app.component('PvDataTable', DataTable);
app.component('PvDialog', Dialog);
app.component('PvFieldset', Fieldset);
app.component('PvInputText', InputText);
app.component('PvMenubar', Menubar);
app.component('PvRow', Row);
app.component('PvToast', Toast);
app.component('PvToolbar', Toolbar);
// Register PrimeVue components - end
app.mount('#app');
