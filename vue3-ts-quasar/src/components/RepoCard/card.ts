import { defineComponent, PropType } from 'vue';

interface Lang {
  language: string;
  color: string;
}

export default defineComponent({
  name: 'RepoCard',
  props: {
    repoName: {
      type: String,
      default: '',
      required: true,
    },
    visibilityTag: {
      type: String,
      default: 'Public',
      required: true,
    },
    description: {
      type: String,
      default: '',
      required: false,
    },
    mainLanguage: {
      type: Object as PropType<Lang>,
      required: true,
    },
    stars: {
      type: Number,
      default: 0,
      required: false,
    },
    forks: {
      type: Number,
      default: 0,
      required: false,
    },
    lastUpdated: {
      type: String,
      required: false,
    },
  },
});
