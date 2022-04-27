install:
	install-deps
	npx simple-git-hooks

run:
	bin/nodejs-package.js 10

install-deps:
	npm ci

test:
	npm test

lint:
	npx eslint .

test-coverage:
	npm test -- --coverage --coverageProvider=v8
