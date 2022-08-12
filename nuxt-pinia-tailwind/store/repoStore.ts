import { defineStore } from 'pinia'
import {
  IBranch,
  IPullRequest,
  IReadme,
  IRepoContents,
  IRepository,
} from '@/types/repository/interfaces'

interface IRepositoryInfo {
  owner: string
  name: string
  visibility: string
  watchersCount: number
  stargazersCount: number
  forksCount: number
  openIssuesCount: number
  description: string
  url: string
  branches: IBranch[]
  readme: IReadme | null
  rootContent: IRepoContents[]
  pullsRequests: IPullRequest[]
}

interface IRepoRootState {
  selectedRepository: IRepositoryInfo | null
}

export const useRepoStore = defineStore('repositoryStore ', {
  state: (): IRepoRootState => ({
    selectedRepository: null,
  }),
  actions: {
    async getRepoInfo(owner: string, repoId: string) {
      try {
        const {
          $config: { GITHUB_API_URL },
          $axios,
        } = this.$nuxt

        // Define all the urls
        const url = `${GITHUB_API_URL}/repos/${owner}/${repoId}`
        const branchesUrl = `${url}/branches`
        const pullRequestsUrl = `${url}/pulls`
        const repoContentsUrl = `${url}/contents`
        const repoReadmeUrl = `${url}/readme`

        // Prepare the promises to be fetched
        const getRepoInfo = $axios.get<IRepository>(url)
        const getRepoBranches = $axios.get<IBranch[]>(branchesUrl)
        const getPullRequests = $axios.get<IPullRequest[]>(pullRequestsUrl, {
          params: {
            state: 'all',
          },
        })
        const getRepoRootContents = $axios.get<IRepoContents[]>(repoContentsUrl)
        const getRepoReadme = $axios.get<IReadme>(repoReadmeUrl)

        // Fetch all the data
        const [
          { data: repoInfo },
          { data: repoBranches },
          { data: repoPullRequests },
          { data: repoRootContent },
          { data: repoReadme },
        ] = await Promise.all([
          getRepoInfo,
          getRepoBranches,
          getPullRequests,
          getRepoRootContents,
          getRepoReadme,
        ])

        this.selectedRepository = {
          owner: repoInfo.owner.login,
          name: repoInfo.name,
          visibility: repoInfo.visibility,
          watchersCount: repoInfo.watchers_count,
          stargazersCount: repoInfo.stargazers_count,
          forksCount: repoInfo.forks_count,
          openIssuesCount: repoInfo.open_issues_count,
          description: repoInfo.description,
          url: repoInfo.url,
          branches: repoBranches,
          pullsRequests: repoPullRequests,
          rootContent: repoRootContent,
          readme: repoReadme,
        }
      } catch (error) {
        return error
      }
    },
  },
})
