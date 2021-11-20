<template>
    <main class="main">
        <Home />
        <Category />
        <About />
        <Trick />
        <Discount />
        <NewArrivals />
        <Newsletter />
    </main>
</template>

<script>
import Home from '@/blocks/Home'
import Category from '@/blocks/Category'
import About from '@/blocks/About'
import Trick from '@/blocks/Trick'
import Discount from '@/blocks/Discount'
import NewArrivals from '@/blocks/NewArrivals'
import Newsletter from '@/blocks/Newsletter'

export default {
    name: 'Main',

    components: {
        Home,
        Category,
        About,
        Trick,
        Discount,
        NewArrivals,
        Newsletter,
    },
}
</script>
