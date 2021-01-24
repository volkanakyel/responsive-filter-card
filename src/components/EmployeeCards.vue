<template>
  <div>
    <div class="element-container">
      <div class="search-container">
        <SearchInput labelText="Search by name" v-model="filterEmployee" />
      </div>
      <div class="cards-container">
        <div class="cards">
          <div v-for="employee in employes" :key="employee.id" class="card">
            <div class="container">
              <img :src="employee.image" alt="" />
            </div>
            <div class="details">
              <h3>{{ employee.fullname }}</h3>
              <p>
                {{ employee.role }}
              </p>
            </div>
          </div>
        </div>
        <Pagination />
      </div>
    </div>
  </div>
</template>

<script>
import employees from "@/lib/employee.json";
import SearchInput from "@/components/SearchInput.vue";
import Pagination from "@/components/Pagination.vue";
export default {
  components: {
    SearchInput,
    Pagination,
  },
  data() {
    return {
      employes: employees,
      filterEmployee: "",
    };
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

@media (max-width: 900px) {
  .cards {
    display: grid;
    margin: 35px 20px 35px 20px;
    grid-gap: 15px;
    grid-template-columns: repeat(2, 1fr);
  }

  img {
    width: 100%;
    height: 40vw;
    object-fit: cover;
    display: block;
    border-radius: 5px 5px 0 0;
  }
  .element-container {
    padding-top: 7vh;
    padding-bottom: 7vh;
  }
}

@media (min-width: 900px) {
  .element-container {
    padding: 10vh;
    display: flex;
    width: 100%;
  }
  .search-container {
    width: 30%;
  }
  .cards-container {
    width: 70%;
  }

  .cards {
    grid-template-columns: repeat(3, 1fr);
    display: grid;
    grid-gap: 30px;
  }
  img {
    width: 100%;
    height: 20vw;
    object-fit: cover;
    display: block;
    border-radius: 5px 5px 0 0;
  }
}

/* Single card */
.card {
  border-radius: 5px 5px 5px 5px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
}

/* Card text element */
.details {
  margin: 10px 10px 15px 10px;
}
.details > h3 {
  font-weight: 700;
  font-size: 18px;
  margin: 20px 5px 5px 10px;
}
.details > p {
  font-size: 13px;
  margin: 5px 0px 20px 10px;
}
</style>
