<template>
     <div class="container">
       <header>
         <h1>Layout's header</h1>
       </header>
       <main>
         <Content /> <!-- built-in component where the content of your Markdown files will be injected.  -->
         <HelloVue />
       </main>
       <footer>
         <p>&copy; {{ currentYear }} My VuePress Site</p>
       </footer>
     </div>
   </template>
   
   <script>
   import HelloVue from "../components/HelloVue.vue"
   export default {
     components: {HelloVue},
     computed: {
       currentYear() {
         return new Date().getFullYear();
       },
     },
   }
   </script>
   
   <style scoped>
   .container {
     max-width: 800px;
     margin: 0 auto;
   }
   h1, footer{
     text-align: center;
   }
   </style>