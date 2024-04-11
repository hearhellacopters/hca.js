// @ts-check
import ts from "rollup-plugin-ts";

/** @type {import("rollup").RollupOptions} */
export default {
  input: 'src/index_solo.ts',
  output: { file: 'dst/hca.js' },
  plugins: [ts()],
};

//export default {
//  input: 'src/test.ts',
//  output: { file: 'testing.js' },
//  plugins: [ts()],
//};