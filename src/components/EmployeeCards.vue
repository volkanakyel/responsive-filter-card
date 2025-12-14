<template>
  <div>
    <div class="employe-section">
      <div class="employe-section__search-panel">
        <SearchInput labelText="Search by name" v-model="filterEmployee" />
      </div>
      <div class="cards-container">
        <div class="cards">
          <div v-for="employe in filteredEmployees" :key="employe.login?.uuid || employe.email">
            <Card :employeInfos="employe" />
          </div>
        </div>
        <Pagination :class="{ 'disappear-pagination': !employees.length }" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Card from '@/components/Card.vue'
import Pagination from '@/components/Pagination.vue'
import SearchInput from '@/components/SearchInput.vue'
import { useEmployeeStore } from '@/store'
import { computed, onMounted, ref } from 'vue'

const store = useEmployeeStore()
const filterEmployee = ref('')

const employees = computed(() => store.employees)

const filteredEmployees = computed(() => {
  if (!employees.value || !employees.value.length) return []

  return employees.value.filter((employe) => {
    return employe.name.first
      .toLowerCase()
      .includes(filterEmployee.value.toLowerCase())
  })
})

onMounted(() => {
  store.fetchEmployees()
})
</script>

<style lang="scss" scoped>
@media (max-width: 900px) {
  .cards {
    display: grid;
    margin: 35px 20px;
    grid-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
  }
  .employe-section {
    padding: 40px 0;
  }
}

@media (min-width: 900px) {
  .employe-section {
    padding: 60px 80px;
    display: flex;
    width: 100%;
    gap: 60px;

    &__search-panel {
      width: 30%;
      min-width: 300px;
    }
  }
  .cards-container {
    flex: 1;
  }
  .cards {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    display: grid;
    grid-gap: 30px;
  }
}

.disappear-pagination {
  display: none;
}
</style>
