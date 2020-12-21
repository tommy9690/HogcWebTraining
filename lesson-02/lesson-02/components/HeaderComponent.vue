<template>
   <h1 class="text-white font-bold test-xl mb-4">{{ title }}</h1> 
</template>

<script>
export default {
    name: 'HeaderComponent',
    /*
    data() {
        return {
            title: "Quick Links",
        }
    },*/
    props: {
        title: {
            type: String,
            default: '',
        },
    },
}
</script>

<style lang="stylus" scoped>

</style>