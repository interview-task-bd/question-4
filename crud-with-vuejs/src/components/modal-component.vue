<template>
   <div>
    <b-modal ref="modal" title="Add New Product Brand">
      <div class="d-block">
          <div class="row">
            <div class="col-12">
               <b-form>
                   <b-form-group
                    id="fieldset-1"
                    description="Enter your product name"
                    label="Enter your name"
                    label-for="product-name"
                    >
                    <b-form-input id="product-name" type="text" placeholder="Name"/>
                   </b-form-group>


                    <b-form-group id="input-group-2" label="Pareant(Optional)" label-for="input-2">
                      <b-form-select>
                        <b-form-select-option>Select a Parent</b-form-select-option>
                      </b-form-select>
                    </b-form-group>
               </b-form>
            </div>
          </div>
      </div>
    </b-modal>
  </div>
</template>

<script>

  import {BModal,BForm,BFormGroup,BFormInput,BFormSelect,BFormSelectOption} from 'bootstrap-vue';
  export default {
      name:"ModalComponent",
      components:{
          BModal,
          BForm,
          BFormGroup,
          BFormInput,
          BFormSelect,
          BFormSelectOption
      },
        methods: {
        showModal() {
            this.$refs['modal'].show()
        },
        hideModal() {
            this.$refs['modal'].hide()
        }
    }
  }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>