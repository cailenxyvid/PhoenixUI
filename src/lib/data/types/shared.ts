export type User = {
	id: string;
	email: string;
	profile: UserProfile | null;
	registrations: UserRegistration[] | null;
	locale: Locale | null;
}

export type UserProfile = {
	first_name: string;
	last_name: string;
	job_title: string;
	company: string;
}

export type UserRegistration = {
	meeting: Meeting
	created_at: string;
}

export type Client = {
	id: number | null;
	parent: number | null;
	name: string;
	config: ClientConfig;
	theme: ClientTheme;
};

export type ClientConfig = {
	hero: boolean | undefined;
	search: boolean | undefined;
	faq: boolean | undefined;
	defaultLocale: number | undefined;
	navType: string | undefined;
	meetingCardType: string | undefined;
}

export type ClientTheme = {
	brandPrimary: string | undefined;
	logoUrl: string | undefined;
	heroImageUrl: string | undefined;
	fontHeader: string | undefined;
	fontBody: string | undefined;
}

export type Meeting = {
	id: number | null;
	series: number | null;	
	client: number | null;	
	xyp_id: number | null;	
	xyp_status: string | null;
	deleted: boolean;
	status: number | null;
	options: MeetingOptions;
	content: MeetingContent[];
	meeting_content: any[] | null; //# todo: map db output to proper content array
};

export type MeetingOptions = {
	xyp_instance: number;
	xyp_title: string | undefined;
	image_url: string | undefined;
	startDate: string;
}

export type MeetingContent = {
	id: number | undefined | null;
	locale: number | undefined;
	locale_code: string;
	type: number | undefined;
	type_name: string | undefined;
	content: string | undefined;
}

export type Series = {
	id: number | null;
	client: number | null;	
	title: string;
	meetings: Meeting[] | null;
};

export type Page = {
	id: number;
	title: string;
	created_at: string;
};

export type Locale = {
	id: number;
	code: string;
	title: string;
	native_title: string;
	dir: string;
	created_at: string;
};