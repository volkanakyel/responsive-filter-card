<template>
  <div class="search">
    <h2 class="search__title">Meet the team</h2>
    <div class="search__container">
      <input
        class="search__input"
        @input="updateValue"
        :value="value"
        type="text"
        maxlength="30"
        required
      />
      <label class="search__text-label" v-if="labelText">{{ labelText }}</label>
      <i class="fas fa-search search__icon"></i>
      <button class="search__filter-button">Filter</button>
    </div>
    <div class="search__labels">
      <button class="search__label-button">All</button>
      <button class="search__label-button">Lawyers</button>
      <button class="search__label-button">Barristers</button>
      <button class="search__label-button">Partners</button>
      <button class="search__label-button">Senior Management</button>
      <button class="search__label-button">Paralegals</button>
      <button class="search__label-button">Litigation Executive</button>
      <button class="search__label-button">Counsel</button>
      <button class="search__label-button">Judges</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    labelText: {
      type: String,
      default: "Search input",
    },
    value: [String, Number],
  },
  data() {
    return {
      nameInput: "",
    };
  },
  methods: {
    updateValue(event) {
      /* Update input value from parent component */
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style lang="scss">
.search {
  width: 100%;
  &__title {
    margin-bottom: 30px;
    text-align: left;
    font-weight: 700;
    font-size: 30 px;
  }
  &__container {
    /* Search input box */
    text-align: left;
    width: 100%;
    height: 40px;
    position: relative;
  }
  &__text-label {
    position: absolute;
    bottom: 8px;
    left: 0;
    color: grey;
    pointer-events: none;
    transition: all 0.3s ease;
  }
  &__labels {
    /* Space between element set button size */
    width: 75%;
    padding-top: 40px;
  }
  &__label-button {
    /* Label button */
    padding: 10px 8px;
    margin: 5px 4px;
    border-radius: 7px;
    font-weight: 600;
    color: black;
    border: 0;
    font-size: 11px;
    display: inline-block;
    background-color: whitespace;
    &:hover {
      background-color: #3727c6;
      color: white;
    }
  }
  &__icon {
    /* Align search icon on search input */
    position: absolute;
    left: 67%;
    top: 13px;
    color: #3727c6;
  }
  &__input {
    width: 70%;
    height: 100%;
    border: none;
    font-size: 16px;
    border-bottom: 2px solid silver;
    &:focus ~ label,
    &:valid ~ label {
      transform: translateY(-23px);
      font-size: 15px;
      color: #3727c6;
    }
  }
}
@media (min-width: 900px) {
  .search {
    &__filter-button {
      display: none;
    }
  }
}
@media (max-width: 900px) {
  /* Change style for screen smaller than 900px */
  .search {
    padding: 20px;
    width: 100%;
    &__labels {
      display: none;
    }
    &__filter-button {
      position: absolute;
      background: none;
      width: 25%;
      height: 100%;
      font-weight: 700;
      left: 70%;
      top: 0;
      border: 1px solid #3727c6;
      font-size: 16px;
      border-radius: 40px;
      margin-left: 5%;
      margin-right: 90%;
      color: #3727c6;
    }
    &__input {
      width: 100%;
      height: 100%;
      border: none;
      font-size: 15px;
      border-bottom: 2px solid silver;
    }
  }
}

.input-data input:focus ~ label,
.input-data input:valid ~ label {
  /* Transition raising label */
  transform: translateY(-23px);
  font-size: 15px;
  color: #3727c6;
}
</style>
