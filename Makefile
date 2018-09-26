REPORTER = spec

# all: jshint test

# test:
# 	@NODE_ENV=test ./node_modules/.bin/mocha --recursive --reporter $(REPORTER) --timeout 3000
#
# jshint:
# 	jshint lib examples test index.js
#
# tests: test
#
# tap:
# 	@NODE_ENV=test ./node_modules/.bin/mocha -R tap > results.tap
#
# unit:
# 	@NODE_ENV=test ./node_modules/.bin/mocha --recursive -R xunit > results.xml --timeout 3000
#
skel:
	mkdir lib test webpack containers build
	touch index.js
	npm install --save-dev @babel/cli @babel/core @babel/preset-react @babel/preset-env webpack webpack-dev-server webpack-cli babel-loader react react-dom react-scripts tape


.PHONY: test tap unit jshint skel
