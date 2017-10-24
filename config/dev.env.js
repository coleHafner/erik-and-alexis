var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
	NODE_ENV: '"development"',
	RSVP_BASE_URL: '"http://rsvp-me.dev"',
	SITE_NAME: '"Alexis and Erik Make A Great Team"'
})
