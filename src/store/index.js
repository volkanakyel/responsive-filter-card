import { defineStore } from 'pinia'
import { getEmploye } from '../services/getEmploye'

export const useEmployeeStore = defineStore('employee', {
  state: () => ({
    employeeList: []
  }),

  getters: {
    employees: (state) => state.employeeList
  },

  actions: {
    async fetchEmployees() {
      try {
        const data = await getEmploye()
        this.employeeList = data?.results || []
      } catch (error) {
        console.error('Failed to fetch employees:', error)
        this.employeeList = []
      }
    }
  }
})
