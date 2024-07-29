CREATE TABLE IF NOT EXISTS "cafe" (
	"id" integer PRIMARY KEY NOT NULL,
	"text" text NOT NULL,
	"date" date DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "todo" (
	"id" integer PRIMARY KEY NOT NULL,
	"text" text NOT NULL,
	"done" boolean DEFAULT false NOT NULL
);
