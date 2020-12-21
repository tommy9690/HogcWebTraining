<template>
    <div class="mr-12">
        <!-- keys need to be unique!-->
        <!--v-on can be use @ !-->
        <a v-for="link in links" :keys="link" class="block text-white no-underline mb-1 text-sm" href="#" v-on:pop-alert="alertFunction">
        {{link}}</a>
    </div>
    
</template>
<script>
export default {
    name: 'Links',
    props: {
        links: {
            type: Array,
            default() {
                return[]
            },
        },
    },
    computed: {
        toLower() {
            return this.links.map([link] => {
                return links.toLowerCase();
            })
        }
    },
    method: {
        toLower() {
            return this.links.map([link] => {
                return links.toLowerCase();
            })
        }
    }
}
</script>