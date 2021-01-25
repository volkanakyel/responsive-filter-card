<template>
  <div>
    <div class="wrapper">
      <h2>Meet the team</h2>
      <div class="input-data">
        <input
          @input="updateValue"
          :value="value"
          type="text"
          maxlength="30"
          required
        />
        <label v-if="labelText">{{ labelText }}</label>
        <i class="fas fa-search"></i>
        <button class="btn-filter">Filter</button>
      </div>
      <div class="group-label">
        <button class="button-label">All</button>
        <button class="button-label">Lawyers</button>
        <button class="button-label">Barristers</button>
        <button class="button-label">Partners</button>
        <button class="button-label">Senior Management</button>
        <button class="button-label">Paralegals</button>
        <button class="button-label">Litigation Executive</button>
        <button class="button-label">Counsel</button>
        <button class="button-label">Judges</button>
      </div>
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

<style scoped>
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
h2 {
  margin-bottom: 30px;
  text-align: left;
  font-weight: 700;
  font-size: 30 px;
}

@media (min-width: 900px) {
  /* Change style for screen larger than 900px */
  .wrapper {
    width: 100%;
  }
  /* Remove the filter button on bigger screen */
  .btn-filter {
    display: none;
  }
  .group-label {
    /* Space between element set button size */
    width: 75%;
    padding-top: 40px;
  }
  .button-label {
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
  }
  .button-label:hover {
    background-color: #3727c6;
    color: white;
  }
}
@media (max-width: 900px) {
  /* Change style for screen smaller than 900px */
  .wrapper {
    padding: 20px;
    width: 100%;
  }
  .group-label {
    display: none;
  }
  .btn-filter {
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
  .wrapper .input-data input {
    width: 100%;
    height: 100%;
    border: none;
    font-size: 15px;
    border-bottom: 2px solid silver;
  }
}

.wrapper .input-data {
  /* Search input box */
  text-align: left;
  width: 100%;
  height: 40px;
  position: relative;
}

.input-data input:focus ~ label,
.input-data input:valid ~ label {
  /* Transition raising label */
  transform: translateY(-23px);
  font-size: 15px;
  color: #3727c6;
}

.wrapper .input-data input {
  width: 70%;
  height: 100%;
  border: none;
  font-size: 16px;
  border-bottom: 2px solid silver;
}
.wrapper .input-data label {
  position: absolute;
  bottom: 8px;
  left: 0;
  color: grey;
  pointer-events: none;
  transition: all 0.3s ease;
}

.input-data i {
  /* Align search icon on search input */
  position: absolute;
  left: 67%;
  top: 13px;
  color: #3727c6;
}
</style>
