const basePath = "/react/react-count-game/";

export default {
  plugins: [
    [
      "umi-plugin-react",
      {
        dva: true,
        antd: true,
      },
    ],
  ],
  theme: {
    "primary-color": "#0aa679",
  },
  base: basePath,
  publicPath: basePath,
  routes: [
    { path: "/", redirect: "/example" },
    { path: "/example", component: "./example/page.tsx" },
  ],
};
