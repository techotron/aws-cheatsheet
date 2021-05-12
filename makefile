up: start-backend start-frontend

down: 
	cd backend && \
	$(MAKE) down

start-frontend:
	cd frontend && \
	$(MAKE) up

start-backend:
	cd backend && \
	$(MAKE) run-backend

start-pgadmin:
	cd backend && \
	$(MAKE) run-pgadmin

lint:
	docker run \
		-e RUN_LOCAL=true \
		-v $(shell pwd):/tmp/lint \
		-e VALIDATE_JAVASCRIPT_STANDARD=false \
		-e VALIDATE_BASH=false \
		-e VALIDATE_SQL=false \
			github/super-linter:latest
