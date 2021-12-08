<template>
  <div>
    <div class="employe-section">
      <div class="employe-section__search-panel">
        <SearchInput labelText="Search by name" v-model="filterEmployee" />
      </div>
      <div class="cards-container">
        <div class="cards">
          <div v-for="employe in filteredEmploye" :key="employe.id.value">
            <Card :employeInfos="employe" />
          </div>
        </div>
        <Pagination :class="{ 'disappear-pagination': !getEmploye }" />
      </div>
    </div>
  </div>
</template>

<script>
import SearchInput from "@/components/SearchInput.vue";
import Pagination from "@/components/Pagination.vue";
import Card from "@/components/Card.vue";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  components: {
    SearchInput,
    Pagination,
    Card,
  },
  data() {
    return {
      filterEmployee: "",
    };
  },
  methods: {
    ...mapActions({
      fetchEmploye: "fetchEmployeList",
    }),
  },
  computed: {
    ...mapGetters(["getEmploye"]),
    filteredEmploye() {
      return this.getEmploye
        ? this.getEmploye.filter((employe) => {
            return employe.name.first
              .toLowerCase()
              .includes(this.filterEmployee.toLowerCase());
          })
        : [];
    },
  },
  created() {
    this.fetchEmploye();
    console.log(this.getEmploye);
  },
};
</script>

<style lang="scss">
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
  .employe-section {
    padding-top: 7vh;
    padding-bottom: 7vh;
  }
}

@media (min-width: 900px) {
  .employe-section {
    padding: 10vh;
    display: flex;
    width: 100%;
    &__search-panel {
      width: 30%;
    }
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

.disappear-pagination {
  display: none;
}
</style>
