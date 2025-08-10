import {store} from '../store/store.js';
import {
  fetchAllEmployees,
  changePage,
  deleteEmployee,
  searchEmployees,
} from '../store/employeeSlice.js';

export class EmployeeUtils {
  static async searchEmployees(searchQuery) {
    try {
      await store.dispatch(searchEmployees(searchQuery));
    } catch (error) {
      console.error('Error searching employees:', error);
      throw error;
    }
  }

  static async loadEmployees() {
    try {
      await store.dispatch(fetchAllEmployees());
    } catch (error) {
      console.error('Error loading employees:', error);
      throw error;
    }
  }

  static async changePage(page) {
    try {
      await store.dispatch(changePage(page));
    } catch (error) {
      console.error('Error changing page:', error);
      throw error;
    }
  }

  static async deleteEmployee(id) {
    try {
      await store.dispatch(deleteEmployee(id));
    } catch (error) {
      console.error('Error deleting employee:', error);
      throw error;
    }
  }

  static setupStoreSubscription(component) {
    const unsubscribe = store.subscribe(() => {
      const state = store.getState().employees;

      component.employees = state.currentEmployees;
      component.currentPage = state.currentPage;
      component.totalPages = state.totalPages;
      component.totalItems = state.totalItems;
      component.loading = state.loading;
      component.error = state.error;
      component.isSearching = state.isSearching;

      component.requestUpdate();
    });

    return unsubscribe;
  }

  static getCurrentState() {
    return store.getState().employees;
  }
}
