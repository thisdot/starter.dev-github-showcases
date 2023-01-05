/**Color-coded labels help you categorize and filter your issues (just like labels in Gmail). */
export type GithubIssueLabel = {
  color: string;
  default: boolean;
  description?: string | null;
  id: number;
  name: string;
  node_id: string;
  url: string;
};
