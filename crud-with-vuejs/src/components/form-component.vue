<template>
<div class="m-5">
  <b-card title="Add Product">
    <b-form>
      <b-row>

         <b-col cols="6" >
            <b-form-group
            id="input-group-1"
            label="Name:"
            label-for="name"
            >
            <b-form-input
            id="name"
            type="text"
            required
            placeholder="e.g. Lux"
            ></b-form-input>
           </b-form-group>
         </b-col>



         <b-col cols="6">
            <b-form-group
            id="input-group-2"
            label="SKU"
            label-for="sku"
             >
            <b-form-input
            id="sku"
            type="text"
            required
            placeholder="e.g. SKU-1234:"
            ></b-form-input>
          </b-form-group>
         </b-col>




         <b-col cols="12" >
           <b-form-group>
                <b-form-checkbox
                id="checkbox-1"
                v-model="status"
                name="checkbox-1"
                value="stockable"
                unchecked-value="not-stockable"
                >
                  Stockable
                </b-form-checkbox>
           </b-form-group>
         </b-col>
  


         <b-col cols="6" >
            <b-form-group
            id="input-group-5"
            label="Product Brand"
            label-for="brand"
        >
          <b-form-select  class="mb-3">
           <b-form-select-option :value="null" >Please select a brand</b-form-select-option>
           <b-form-select-option  >Create New</b-form-select-option>
         </b-form-select>
          
           </b-form-group>
         </b-col>
         
         <b-col cols="6" >
            <b-form-group
            id="input-group-5"
            label="Product Brand"
            label-for="brand"
        >
            <b-form-select  class="mb-3">
                <b-form-select-option :value="null" >Please select a Category</b-form-select-option>
            </b-form-select>
           </b-form-group>
         </b-col>


         <b-col cols="6" >
            <b-form-group
            id="input-group-6"
            label="Description"
            label-for="description"
        >
            <b-form-textarea
            id="textarea"
            placeholder="Product Description"
            rows="3"
            max-rows="6"
          ></b-form-textarea>

        </b-form-group>
         </b-col>

         <b-col cols="6" >
            <b-form-group
            id="usp"
            label="USP"
            label-for="usp"
        >
           <b-form-textarea
            id="usp"
            placeholder="Product USP"
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>
        </b-col>

       
        <b-col cols="6">
          <b-form-group>
            <vue2Dropzone ref="filedropzone" id="dropzone" :options="dropzoneOptions"></vue2Dropzone>
          </b-form-group>
        </b-col>

        <b-col cols="6">
            <b-form-group
            id="varient_category"
            label="Varient Category"
            label-for="varient_category"
            >
           <b-form-input
            id="varient_category"
            type="text"
            placeholder="Varient Category"
          ></b-form-input>
          </b-form-group>
        </b-col>

        <b-col col="12">
          <b-form-group class="text-right">
            <b-button type="button" @click="showModal" class="btn-sm btn-light ml-3">Close</b-button>
            <b-button type="submit" class="btn-sm btn-success ml-3">Save</b-button>
          </b-form-group>
        </b-col>

        <modal-component ref="modal"/>

      </b-row>
    </b-form>
  </b-card>


</div>
</template>


<script>
import {
    BCard,
    BForm,
    BFormGroup,
    BFormInput,
    BRow,
    BCol,
    BFormTextarea,
    BFormCheckbox,
    BFormSelect,
    BFormSelectOption,
    BButton
} from 'bootstrap-vue';
import ModalComponent from '@/components/modal-component'
import vue2Dropzone from 'vue2-dropzone';
import 'vue2-dropzone/dist/vue2Dropzone.min.css';

export default {
    name:"FormComponent",
    components:{
        BCard,
        BForm,
        BFormGroup,
        BFormInput,
        BRow,
        BCol,
        BFormTextarea,
        vue2Dropzone,
        BFormCheckbox,
        BFormSelect,
        BFormSelectOption,
        BButton,
        ModalComponent
    },

    data: function () {
    return {
      dropzoneOptions: {
          url: 'https://httpbin.org/post',
          thumbnailWidth: 150,
          maxFilesize: 0.5,
          headers: { "My-Awesome-Header": "header value" }
      }
    }
  },
  methods:{
    showModal(){
     this.$refs.modal.showModal()
    }
  }
}
</script>