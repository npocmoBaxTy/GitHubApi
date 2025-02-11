type IOwner = {
  avatar_url: string;
  followers_url: string;
  id: string;
  login: string;
  url: string;
  user_view_type: string;
  html_url: string;
};

export type IRepos = {
  id: number;
  owner: IOwner;
  fork: boolean;
  forks: number;
  forks_count: number;
  description: string | null;
  full_name: string;
  forks_url: string;
  html_url: string;
  name: string;
  open_issues_count: number;
  stargazers_count: number | null;
  watchers_count: number;
  visibility: string | null;
  license: {
    key: string;
    name: string;
    spdx_id: string;
  };
};

export interface IOwnerRepos {}
