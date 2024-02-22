import * as esbuild from 'esbuild'

let ctx = await esbuild.context({
  entryPoints: ['src/index.js'],
  bundle: true,
  minify: true,
  outfile: 'dist/index.js',
})

await ctx.watch()
