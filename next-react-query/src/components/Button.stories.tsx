import { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";
import { Button } from "./Button";

export default {
  component: Button,
  title: "Components/Button",
} as Meta;

const Template: Story<ComponentProps<typeof Button>> = (args) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: "Primary",
};
