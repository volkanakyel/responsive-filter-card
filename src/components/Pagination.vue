<template>
  <ul class="pagination">
    <li><a class="navigation" href="#" @click.prevent>Previous</a></li>
    <li><a class="pagination-item-first" href="#" @click.prevent>1</a></li>
    <li><a class="pagination-item" href="#" @click.prevent>2</a></li>
    <li><a class="pagination-item" href="#" @click.prevent>3</a></li>
    <li><a class="pagination-item" href="#" @click.prevent>...</a></li>
    <li><a class="pagination-item-last" href="#" @click.prevent>16</a></li>
    <li><a class="navigation" href="#" @click.prevent>Next</a></li>
  </ul>
</template>

<script setup>
</script>

<style scoped>
@media (max-width: 900px) {
  ul {
    margin: 10% auto;
    width: 80%;
    display: flex;
    justify-content: space-around;
  }
  .pagination-item {
    display: none;
  }
}

@media (min-width: 900px) {
  ul {
    margin: 60px auto 0;
    display: flex;
    justify-content: center;
    gap: 8px;
  }
}

ul {
  list-style: none;
  padding: 0;
}

ul li a {
  display: inline-block;
  padding: 12px 16px;
  text-align: center;
  color: #4a5568;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease;
  background: white;
  border: 2px solid #e2e8f0;
}

ul li a:hover {
  background-color: #f7fafc;
  border-color: #cbd5e0;
  transform: translateY(-2px);
}

.pagination-item:hover,
.pagination-item-first:hover,
.pagination-item-last:hover {
  background-color: #667eea;
  color: white;
  border-color: #667eea;
}

.navigation {
  color: #667eea;
  border-color: #667eea;
  font-weight: 700;
}

.navigation:hover {
  background-color: #667eea;
  color: white;
}
</style>
