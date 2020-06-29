<template>
   <div>
    <b-modal ref="modal" title="view">
      <div class="d-block">
          <div class="row">
            <div class="col-12">
               <b-form>
                   <b-form-group
                    id="fieldset-1"
                    description="Let us know your name."
                    label="Enter your name"
                    label-for="input-1"
                    >
                       <b-form-input type="text" value="" placeholder="Name"/>
                   </b-form-group>
               </b-form>
            </div>
          </div>
      </div>
    </b-modal>
  </div>
</template>

<script>

  import {BModal,BForm,BFormGroup,BFormInput} from 'bootstrap-vue';
  export default {
      name:"ModalComponent",
      components:{
          BModal,
          BForm,
          BFormGroup,
          BFormInput
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