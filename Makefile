BIN = ./node_modules/.bin
PATH := $(BIN):$(PATH)

lint:
	@jshint ./index.js

build:
	@jshint ./index.js
	cp ./index.js ./dist/angular-module-shim.js
	@uglifyjs ./index.js -o ./dist/angular-module-shim.min.js