<template>
  <div>
    <ul>
      <li><a class="navigation" href="">Previous</a></li>
      <li><a class="pagination-item-first" href="">1</a></li>
      <li><a class="pagination-item" href="">2</a></li>
      <li><a class="pagination-item" href="">3</a></li>
      <li><a class="pagination-item" href="">...</a></li>
      <li><a class="pagination-item-last" href="">16</a></li>
      <li><a class="navigation" href="">Next</a></li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
@media (max-width: 900px) {
  /* Change style for screen smaller than 900px */
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
  /* Change style for screen larger than 900px */
  ul {
    /* Align center all elements and side by side */
    margin: 4% auto;
    width: 20%;
    display: flex;
    justify-content: space-around;
  }
}
ul li {
  /* remove list decoration */
  list-style: none;
}

ul li a {
  /* Separate each element */
  display: inline-block;
  /* width: 60px; */
  padding: 10px;
  text-align: center;
  /* line-height: 40px; */
  color: black;
  font-weight: 700;
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;
}

.pagination-item:hover {
  text-decoration: underline;
  color: #3727c6;
}
.navigation {
  color: #3727c6;
  text-decoration: underline;
}
</style>
