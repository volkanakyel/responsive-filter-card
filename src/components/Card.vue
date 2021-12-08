<template>
  <div class="card">
    <div class="card__header">
      <img class="card__image" :src="employeInfos.picture.large" alt="" />
    </div>
    <div class="card__details">
      <h3 class="card__first-line">{{ employeInfos.name.first }}</h3>
      <p class="card__second-line">Age : {{ employeInfos.registered.age }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    employeInfos: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.card {
  border-radius: 5px 5px 5px 5px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
  &__image {
    width: 100%;
    height: 20vw;
    object-fit: cover;
    display: block;
    border-radius: 5px 5px 0 0;
  }
  &__details {
    margin: 10px 10px 15px 10px;
  }
  &__first-line {
    font-weight: 700;
    font-size: 18px;
    margin: 20px 5px 5px 10px;
  }
  &__second-line {
    font-size: 13px;
    margin: 5px 0px 20px 10px;
  }
}
</style>
