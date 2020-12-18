REGISTRY=techotron
VERSION=$(shell git rev-parse --short HEAD)
APP=aws-tutor:fe-$(VERSION)
LINTER=eslint:webapp

build:
	docker build -t $(REGISTRY)/$(APP) .
publish: docker-login	docker-push
docker-push:
	docker push $(REGISTRY)/$(APP)
docker-login:
	docker login -u techotron
build-lint:
	docker build -t $(LINTER) -f eslint.Dockerfile .
docker-lint:
	docker run --rm \
		-v $(shell pwd)/.eslintrc.yaml:/data/.eslintrc.yaml \
		-v $(shell pwd)/.eslintignore:/data/.eslintignore \
		-v $(shell pwd)/src:/data/src \
		-v $(shell pwd)/public:/data/public \
		$(LINTER) \
			--ext .jsx,.js \
			/data/src
lint: build-lint docker-lint
up:
	npm start
