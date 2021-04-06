import { mockFetch } from "./mock-fetch";

export function getEmployees() {
    return mockFetch("/api/employees");
}

export function getWorklog() {
    return mockFetch("/api/employees/worklog");
}