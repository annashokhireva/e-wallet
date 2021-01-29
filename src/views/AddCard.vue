<template>
  <div>
    <top-header header="ADD A NEW BANK CARD" />
    <card-form />
    <button class="light">
        <h3><router-link to="/"> cancel </router-link></h3>
    </button>
  </div>
</template>

<script>
import TopHeader from '../components/TopHeader.vue';
import CardForm from '../components/CardForm.vue';

export default {
  components: {
    TopHeader,
    CardForm
  }
}
</script>

<style lang="scss" scoped>
  
  .dark {
    @include btn_dark;
  }

  .light {
    @include btn_light;
  }

</style>
