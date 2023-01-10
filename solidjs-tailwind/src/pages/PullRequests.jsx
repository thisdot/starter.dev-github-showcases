import { RepoHeader } from "../components/RepoHeader"
import { RepoPullRequests } from "../components/RepoPullRequests"

const PullRequests = () => {
    return <div class="bg-white h-screen">
        <RepoHeader/>
        <RepoPullRequests/>
    </div>
}

export default PullRequests