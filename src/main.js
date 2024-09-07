import { createApp } from 'vue'

import App from './App.vue'
import FoodItems from './components/FoodItems.vue'
import AnimalCollection from './components/AnimalCollection.vue'

const app = createApp(App)
app.component('food-items', FoodItems);
app.component('animal-collection', AnimalCollection);
app.mount('#app')