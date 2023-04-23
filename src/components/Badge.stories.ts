import type { Meta, StoryObj } from "@storybook/react";

import { Badge, BadgeType } from "./Badge";

const meta = {
  title: "ray/Badge",
  component: Badge,
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    badgeText: "기본",
    className: "",
    mainClassName: "",
    appendedClassName: "",
    badgeType: BadgeType.Info,
    appended: false,
    appendtext: "",
  },
};
export const Appended: Story = {
  args: {
    badgeText: "기본",
    className: "",
    mainClassName: "",
    appendedClassName: "",
    badgeType: BadgeType.FeatureGreen,
    appended: true,
    appendtext: "추가 정보",
  },
};
