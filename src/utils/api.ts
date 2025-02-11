import axios from "axios";

export const githubApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
    Accept: "application/vnd.github.v3+json",
  },
});

export const searchReposesByUsername = async (q: string, page: number) => {
  const res = await githubApi.get(`/users/${q}/repos`, {
    params: {
      page: page,
      per_page: 20,
    },
  });
  return res;
};
