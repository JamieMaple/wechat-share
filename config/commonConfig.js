let analyzer = false
if (process.env.analyzer_enabled) {
  analyzer = true
}

module.exports = {
  PORT: process.env.PORT || 8080,
  analyzer
}
