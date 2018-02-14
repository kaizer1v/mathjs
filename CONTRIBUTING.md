# Contributing to mathjs

## Cloning and Setup
Clone this repository and run the following commands first

```sh
npm build
npm test
```
will generate the required files and test the library for bugs, if any. Once you do that, you will need
to understand the directory structure.

## Scaffold

`/dist` contains the distrbuion/output files generated via the `npm build` command. It will contain
    - `math.js` - the non-minified version of the library
    - `math.min.js` - the minified version of the library
    
