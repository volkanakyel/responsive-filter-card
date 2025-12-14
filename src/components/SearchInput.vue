<template>
  <div class="search">
    <h2 class="search__title">Meet the team</h2>
    <div class="search__container">
      <svg class="search__icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.35-4.35"></path>
      </svg>
      <input
        class="search__input"
        @input="updateValue"
        @focus="isFocused = true"
        @blur="isFocused = false"
        :value="modelValue"
        type="text"
        maxlength="30"
        :placeholder="labelText"
      />
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

<script setup>
import { ref } from 'vue'

defineProps({
  labelText: {
    type: String,
    default: 'Search by name'
  },
  modelValue: {
    type: [String, Number],
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])
const isFocused = ref(false)

const updateValue = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<style lang="scss" scoped>
.search {
  width: 100%;

  &__title {
    margin-bottom: 30px;
    text-align: left;
    font-weight: 700;
    font-size: 30px;
    color: #1a202c;
  }

  &__container {
    text-align: left;
    width: 100%;
    height: 50px;
    position: relative;
    display: flex;
    align-items: center;
  }

  &__icon {
    position: absolute;
    left: 16px;
    color: #a0aec0;
    pointer-events: none;
    z-index: 1;
    transition: color 0.3s ease;
  }

  &__input {
    width: 70%;
    height: 100%;
    padding: 0 16px 0 48px;
    border: 2px solid #e2e8f0;
    border-radius: 12px;
    font-size: 16px;
    background: white;
    color: #2d3748;
    transition: all 0.3s ease;
    outline: none;

    &::placeholder {
      color: #a0aec0;
      transition: opacity 0.3s ease;
    }

    &:focus {
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);

      &::placeholder {
        opacity: 0;
      }

      ~ .search__icon {
        color: #667eea;
      }
    }

    &:hover {
      border-color: #cbd5e0;
    }
  }

  &__labels {
    width: 75%;
    padding-top: 24px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  &__label-button {
    padding: 10px 16px;
    border-radius: 8px;
    font-weight: 600;
    color: #4a5568;
    border: 2px solid #e2e8f0;
    font-size: 13px;
    background-color: white;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #667eea;
      color: white;
      border-color: #667eea;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
    }

    &:active {
      transform: translateY(0);
    }
  }

  &__filter-button {
    display: none;
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
  .search {
    padding: 20px;
    width: 100%;

    &__labels {
      display: none;
    }

    &__filter-button {
      display: block;
      position: absolute;
      background: white;
      width: 25%;
      height: 100%;
      font-weight: 700;
      right: 0;
      top: 0;
      border: 2px solid #667eea;
      font-size: 16px;
      border-radius: 12px;
      margin-left: 8px;
      color: #667eea;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background-color: #667eea;
        color: white;
      }
    }

    &__input {
      width: 100%;
      padding-right: calc(25% + 16px);
    }

    &__container {
      flex-wrap: wrap;
    }
  }
}
</style>
