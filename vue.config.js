module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? 'scrum-presentation'
    : '/',
  lintOnSave: 'error',
  runtimeCompiler: process.env.NODE_ENV !== 'production'
}
