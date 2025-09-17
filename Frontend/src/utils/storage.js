export const STORAGE_KEY = "crm_customers_v1";

export function loadCustomers() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("loadCustomers error", e);
    return [];
  }
}

export function saveCustomers(customers) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(customers));
  } catch (e) {
    console.error("saveCustomers error", e);
  }
}
