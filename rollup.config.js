import uglify from 'rollup-plugin-uglify'

export default [
  {                                       // the minified version
    input: 'src/math.js',
    plugins: [uglify()],
    output: {
      file: 'dist/math.min.js',
      format: 'umd',
      name: 'MJ'
    },
  }, {                                    // dev version (un-minified)
    input: 'src/math.js',
    output: {
      file: 'dist/math.js',
      format: 'umd',
      name: 'MJ'
    }
  }
]
