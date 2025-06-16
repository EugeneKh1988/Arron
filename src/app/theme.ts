import { createTheme, DEFAULT_THEME, mergeMantineTheme } from "@mantine/core";

const themeOverride = createTheme({
  primaryColor: "bunker",
  defaultRadius: 15,
  colors: {
    bunker: [
      "#f6f7f9",
      "#ebeef3",
      "#d3dbe4",
      "#acbbcd",
      "#7f98b1",
      "#5f7b98",
      "#4b637e",
      "#3d5067",
      "#364556",
      "#303b4a",
      "#13171d",
    ],
    "fun-blue": [
      "#f0f7ff",
      "#e0effe",
      "#b9defe",
      "#7bc5fe",
      "#36a7fa",
      "#0b8cec",
      "#006eca",
      "#015aa9",
      "#054a87",
      "#0b3e6f",
      "#07274a",
    ],
  },
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);
