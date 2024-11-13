import type { Page } from "./shared";

export type LocalContent = {
    id: number | null;
	content_slug: ContentSlug;
	page: number | null;
	client: number | null;
	locale: number;
    content: string;
};

export type ContentSlug = {
	id: number;
	slug: string;
	title: string;
	page: Page;
};
