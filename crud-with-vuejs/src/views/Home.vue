<template>
   <b-container>
     <b-row>
       <b-col>
         <from-component/>
       </b-col>
     </b-row>
   </b-container>
</template>

<script>
import FromComponent from '@/components/form-component';
import {BRow,BCol,BContainer} from 'bootstrap-vue';

export default {
  name: "Home",
  components: {
    FromComponent,
    BRow,
    BCol,
    BContainer
  }
};
</script>
