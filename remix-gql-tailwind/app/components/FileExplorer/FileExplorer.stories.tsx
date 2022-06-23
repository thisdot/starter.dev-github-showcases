import { Story, Meta } from "@storybook/react";
import { ComponentProps } from "react";
import FileExplorerView from "./FileExplorer.view";

const main = [
  { name: "public", path: "public", type: "tree" },
  { name: "src", path: "src", type: "tree" },
  { name: ".gitignore", path: ".gitignore", type: "blob" },
  { name: "package.json", path: "package.json", type: "blob" },
  { name: "README.md", path: "README.md", type: "blob" },
  { name: "tsconfig.json", path: "tsconfig.json", type: "blob" },
  { name: "yarn.lock", path: "yarn.lock", type: "blob" },
];

const src = [
  { name: "components", path: "src/components", type: "tree" },
  { name: "pages", path: "src/pages", type: "tree" },
  { name: "App.scss", path: "src/App.scss", type: "blob" },
  { name: "App.tsx", path: "src/App.tsx", type: "blob" },
  { name: "index.tsx", path: "src/index.tsx", type: "blob" },
  {
    name: "react-app-env.d.ts",
    path: "src/react-app-env.d.ts",
    type: "blob",
  },
];

export default {
  component: FileExplorerView,
  title: "RepoPage/FileExplorer",
} as Meta;

const Template: Story<ComponentProps<typeof FileExplorerView>> = (args) => (
  <FileExplorerView {...args} />
);

export const RootDir = Template.bind({});
RootDir.args = {
  branch: "main",
  basePath: "mark/reactQuiz",
  repoPath: "",
  items: main,
};

export const SrcDir = Template.bind({});
SrcDir.args = {
  branch: "main",
  basePath: "mark/reactQuiz",
  repoPath: "src",
  items: src,
};
