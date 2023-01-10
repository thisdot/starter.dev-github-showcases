import { RepoHeader } from "../components/RepoHeader"
import { RepoPullRequests } from "../components/RepoPullRequests"
import { PrAndIssuesProvider } from "../contexts/PrAndIssuesContext"

const PullRequests = () => {
    return <div class="bg-white h-screen">
        <PrAndIssuesProvider>
          <RepoHeader/>
          <RepoPullRequests/>
        </PrAndIssuesProvider>
    </div>
}

export default PullRequests