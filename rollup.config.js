import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import copy from "rollup-plugin-copy";
import filesize from "rollup-plugin-filesize";

export default {
  input: "index.js",
  output: {
    file: "dist/react-bootstrap-carousel.js",
  },
  external: ["react", "react-dom", "prop-types"],
  plugins: [
    babel({
      exclude: "node_modules/**",
    }),
    copy({
      targets: [{ src: "app/assert/*", dest: "dist" }],
    }),
    process.env.NODE_ENV === "production" && terser(),
    filesize(),
  ],
};
