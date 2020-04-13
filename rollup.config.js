import typescript from "rollup-plugin-typescript2";

const plugins = [typescript()];

export default ["simplify", "chart"].map((module) => ({
  input: `src/${module}.ts`,

  output: {
    file: `public/${module}.js`,
    format: "esm",
  },

  plugins,
}));
