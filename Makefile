BIN = ./node_modules/.bin
PATH := $(BIN):$(PATH)

lint:
	@jshint ./index.js

test:
	@mocha ./spec.js

build: lint test
	@jshint ./index.js
	cp ./index.js ./dist/angular-module-shim.js
	@uglifyjs ./index.js -o ./dist/angular-module-shim.min.js