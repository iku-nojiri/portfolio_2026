.PHONY: all front wp

front:
	cd front && pnpm dev

wp:
	cd wp && docker compose up -d

all:
	cd wp && docker compose up -d
	cd front && pnpm dev