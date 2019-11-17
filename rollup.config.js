import typescript from 'rollup-plugin-typescript2'

const plugins = [typescript()]

export default [
  {
    input: 'src/simplify.ts',

    output: {
      file: 'public/simplify.js',
      format: 'esm',
    },

    plugins,
  },
]
