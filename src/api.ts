const BASE_URL = 'https://mate.academy/students-api/';

export const request = (url: string) => {
  return fetch(`${BASE_URL}${url}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      return response.json();
    });
};

export const getTodos = () => request('/todos');

export const getUserByID = (userId: number) => request(`/users/${userId}`);