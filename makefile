.PHONY: all front front-build wp

front:
	cd front && pnpm dev

front-build:
	cd front && pnpm build

wp:
	cd wp && docker compose up -d

all:
	cd wp && docker compose up -d
	cd front && pnpm dev