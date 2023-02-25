const isCodeSandbox = 'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env

export default {
  root: 'src/',
  publicDir: '../static/',
  base: './',
  build:
  {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true
  },
  server:
  {
    host: true,
    open: !isCodeSandbox // Open if it's not a CodeSandbox
  },
}