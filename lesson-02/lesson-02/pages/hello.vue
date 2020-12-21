<template>
<div @click="navigateToHome">click me haha</div>
</template>

<script>
export default {
    methods: {
        navigateToHome() {
            this.$router.push({path: '/'})
        },
    },
}
</script>

<style lang="scss">
div {
   background: red; 
}
</style>