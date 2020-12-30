up: start-backend start-frontend

down: 
	cd backend && \
	$(MAKE) down

start-frontend:
	cd frontend && \
	$(MAKE) up

start-backend:
	cd backend && \
	$(MAKE) run-dev

start-pgadmin:
	cd backend && \
	$(MAKE) run-pgadmin

lint:
	docker run \
		-e RUN_LOCAL=true \
		-v $(shell pwd):/tmp/lint \
		-e VALIDATE_JAVASCRIPT_STANDARD=false \
			github/super-linter:latest
