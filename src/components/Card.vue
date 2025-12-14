<template>
  <div class="card">
    <div class="card__image-container">
      <img class="card__image" :src="employeInfos.picture.large" :alt="`${employeInfos.name.first} ${employeInfos.name.last}`" />
    </div>
    <div class="card__details">
      <h3 class="card__name">{{ employeInfos.name.first }} {{ employeInfos.name.last }}</h3>
      <p class="card__age">Age: {{ employeInfos.registered.age }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  employeInfos: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.card {
  border-radius: 16px;
  background: white;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(226, 232, 240, 0.8);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.card__image-container {
  position: relative;
  width: 100%;
  padding-top: 100%;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.card__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.card__details {
  padding: 20px;
  background: white;
}

.card__name {
  font-weight: 700;
  font-size: 18px;
  margin: 0 0 8px 0;
  color: #1a202c;
  line-height: 1.4;
}

.card__age {
  font-size: 14px;
  color: #718096;
  margin: 0;
  font-weight: 500;
}

@media (max-width: 900px) {
  .card__details {
    padding: 16px;
  }

  .card__name {
    font-size: 16px;
  }

  .card__age {
    font-size: 13px;
  }
}
</style>
