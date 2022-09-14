import { Ref } from 'vue';

export interface GistItem {
  id: string;
  description?: string | null;
  name: string;
  url: string;
}

export interface UseGist {
  getUserGists: () => {
    data: Readonly<Ref<Readonly<[] | GistItem[]>>>;
    loading: Ref<boolean>;
  };
}
