.PHONY: front

front:
	cd front && pnpm dev & \
	sleep 2 && \
	open http://localhost:3000