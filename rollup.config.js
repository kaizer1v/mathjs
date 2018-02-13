import uglify from 'rollup-plugin-uglify'

export default {
  input: 'src/math.js',
  plugins: [uglify()]
  output: {
    file: 'dist/math.min.js',
    format: 'iife',
    name: 'mathjs'
  }
}
