<template>
      <div class="footer-container bg-gray-800 max-w-sm">
          <HeaderComponent v-bind:title="title"></HeaderComponent>
          <h1 class="footer-title font-bold text-xl text-white mb-4">Quick Links</h1>
          <div class="flex flex-row">
              <div class="mr-10">
                  <a class="block mb-1 text-gray-200 no-underline" href="">Online Church</a>
                  <a class="block mb-1 text-gray-200 no-underline" href="">Featured</a>
                  <a class="block mb-1 text-gray-200 no-underline" href="">Contact Us</a>
                  <a class="block mb-1 text-gray-200 no-underline" href="">Resources</a>
              </div>
              <div clas="mr-10">
                  <a class="block mb-1 text-gray-200 no-underline" href="">Give</a>
                  <a class="block mb-1 text-gray-200 no-underline" href="">About Us</a>
                  <a class="block mb-1 text-gray-200 no-underline" href="">Governance</a>
                  <a class="block mb-1 text-gray-200 no-underline" href="">News Centre</a>
              </div>
          </div>
      </div>
      <input v-model="inputValue" />
</template>

<script>
import HeaderComponent from '@/Components/HeaderComponent.vue'
import Links from '@/Components/Links.vue'
export default {
    
    components: {
        HeaderComponent,
    },
    data() {
        return {
            title : 'Quick'
        }
    },
    methods: {
        alertfunction() {
            this.$emit('pop-alert')
        }
    }
}
</script>