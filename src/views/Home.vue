<template>
    <section class="container">
        <range-selector :products="filteredProducts" v-model="max" />
        <product-list :products="filteredProducts" />
    </section>
</template>

<script>
import RangeSelector from '@/components/RangeSelector'
import ProductList from '../components/ProductList.vue'
export default {
    name: 'Home',
    data: function() {
        return {
            max: 50,
            cart: []
        }
    },
    props: ['products'],
    components: {
        RangeSelector,
        ProductList
    },
    computed: {
        filteredProducts() {
            return this.products.filter(item => item.price < Number(this.max))
        }
    }
}
</script>
