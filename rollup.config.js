import fs from 'fs';
import { babel } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { visualizer } from 'rollup-plugin-visualizer';
import json from '@rollup/plugin-json';



export default opts => {
  const options = Object.assign(
    {
      css: true,
    },
    opts
  )
  return{
  input: options.input,
  
  plugins: [
    babel({ 
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      rootMode: 'upward'
     }),
    peerDepsExternal(),
    nodeResolve({ 
      jsnext: true,
      main: true,
    }),
    commonjs(),
    terser(),
    json(),
    postcss({
      plugins: []
    }),
    visualizer(),
    
  ],
  output: [
    {
      file: "./dist/index.es.js",
      format: 'es',
      exports: "named",
    },
    
  ],
}
};
