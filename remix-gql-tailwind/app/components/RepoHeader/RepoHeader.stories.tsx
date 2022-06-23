import { RepoContext, RepoProvider } from "../../context/RepoContext";
import { Story, Meta } from "@storybook/react";
import RepoHeader from "./RepoHeader";

export default {
  component: RepoHeader,
  title: "RepoPage/RepoHeader",
} as Meta;

const Template: Story<RepoContext> = (args) => (
  <RepoProvider value={args}>
    <RepoHeader />
  </RepoProvider>
);

export const Default = Template.bind({});
Default.args = {
  name: "starter.dev",
  owner: "thisdot",
  pathname: "/thisdot/starter.dev",
  isRepoLoading: false,
  data: {
    isPrivate: false,
    stargazerCount: 30,
    forkCount: 10,
    watcherCount: 5,
    openIssueCount: 2,
    openPullRequestCount: 1,
    topics: [],
    isOrg: true,
  },
};
