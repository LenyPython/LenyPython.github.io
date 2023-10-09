import { SvgType } from '@/Global/components/SvgProvider/SvgProvider'
import { StoryblokStory } from 'storyblok-generate-ts'

export interface ContactStoryblok {
	headline?: string
	_uid: string
	component: 'Contact'
	[k: string]: any
}

export interface RichtextStoryblok {
	type: string
	content?: RichtextStoryblok[]
	marks?: RichtextStoryblok[]
	attrs?: any
	text?: string
	[k: string]: any
}

export type MultilinkStoryblok =
	| {
			cached_url?: string
			linktype?: string
			[k: string]: any
	  }
	| {
			id?: string
			cached_url?: string
			anchor?: string
			linktype?: 'story'
			story?: {
				name: string
				created_at?: string
				published_at?: string
				id: number
				uuid: string
				content?: {
					[k: string]: any
				}
				slug: string
				full_slug: string
				sort_by_date?: null | string
				position?: number
				tag_list?: string[]
				is_startpage?: boolean
				parent_id?: null | number
				meta_data?: null | {
					[k: string]: any
				}
				group_id?: string
				first_published_at?: string
				release_id?: null | number
				lang?: string
				path?: null | string
				alternates?: any[]
				default_full_slug?: null | string
				translated_slugs?: null | any[]
				[k: string]: any
			}
			[k: string]: any
	  }
	| {
			url?: string
			cached_url?: string
			anchor?: string
			linktype?: 'asset' | 'url'
			[k: string]: any
	  }
	| {
			email?: string
			linktype?: 'email'
			[k: string]: any
	  }

export interface CredentialStoryblok {
	cred: RichtextStoryblok
	person: string
	position?: string
	linkedin_profile?: MultilinkStoryblok
	_uid: string
	component: 'Credential'
	[k: string]: any
}

export interface CredentialsStoryblok {
	headline: string
	creds: CredentialStoryblok[]
	_uid: string
	component: 'Credentials'
	[k: string]: any
}

export interface HeroStoryblok {
	headline?: string
	rich_text?: RichtextStoryblok
	call_to_action?: string
	cta_link: MultilinkStoryblok
	_uid: string
	component: 'Hero'
	[k: string]: any
}

export interface PortfolioContentLayoutStoryblok {
	Sections: SectionStoryblok[]
	_uid: string
	component: 'PortfolioContentLayout'
	[k: string]: any
}

export interface AssetStoryblok {
	alt?: string
	copyright?: string
	id: number
	filename: string
	name: string
	title?: string
	focus?: string
	[k: string]: any
}

export interface ProjectStoryblok {
	project_name: string
	type: '' | 'side' | 'commercial'
	role: ('' | 'developer' | 'maintenance' | 'support')[]
	description?: RichtextStoryblok
	tech: TechnologiesStoryblok[]
	live_page?: MultilinkStoryblok
	repo?: MultilinkStoryblok
	proj_img?: AssetStoryblok
	_uid: string
	component: 'Project'
	[k: string]: any
}

export interface ProjectsStoryblok {
	headline?: string
	projects: ProjectStoryblok[]
	_uid: string
	component: 'Projects'
	[k: string]: any
}

export interface SectionStoryblok {
	ID?: string
	Blocks: any[]
	in_navigation?: boolean
	_uid: string
	component: 'Section'
	[k: string]: any
}

export interface SocialsStoryblok {
	headline?: string
	_uid: string
	component: 'Socials'
	[k: string]: any
}

export interface TechGroupStoryblok {
	headline?: string
	advanced_tech: TechnologiesStoryblok[]
	basic_tech: TechnologiesStoryblok[]
	_uid: string
	component: 'TechGroup'
	[k: string]: any
}

export interface TechnologiesStoryblok {
	techs?: SvgType[]
	_uid: string
	component: 'technologies'
	[k: string]: any
}

export interface TechnologyStoryblok {
	headline: string
	tech_groups: TechGroupStoryblok[]
	_uid: string
	component: 'Technology'
	[k: string]: any
}

export interface WorkExperienceStoryblok {
	company?: string
	start?: string
	end?: string
	role?: string
	description?: RichtextStoryblok
	_uid: string
	component: 'WorkExperience'
	[k: string]: any
}

export interface WorkHistoryStoryblok {
	headline?: string
	experience?: WorkExperienceStoryblok[]
	_uid: string
	component: 'WorkHistory'
	[k: string]: any
}
