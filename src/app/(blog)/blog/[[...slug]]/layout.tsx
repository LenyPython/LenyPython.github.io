// @ts-expect-error
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'
import StoryblokProvider from '@/Global/components/StoryblokProvider'

// storyblok component
import Section from '@/Global/blocks/Section/Section'
import Page from '@/Global/blocks/Page'

import '@/styles/global.scss'
import { PropsWithChildren } from 'react'
import GlobalNavigation from '@/Global/components/GlobalNavigation'

export const metadata = {
	title: "Piotr Lenartowicz, I'm a software engineer",
	description:
		'Portfolio website of Piotr Lenartowicz. Check me out and feel free to contact!',
	keywords: [
		'frontend',
		'engineer',
		'software',
		'web development',
		'software developer',
		'coding'
	],
	other: {
		'google-site-verification': 'k9QCsodOesXnINyBXFqD5LaS32KeX6NlLep08a3ROUQ'
	}
}

const components = {
	Section,
	Page
}

storyblokInit({
	accessToken: process.env.STORYBLOK_API_TOKEN,
	use: [apiPlugin],
	components
})

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<StoryblokProvider>
			<html lang='en'>
				<body>
					<GlobalNavigation />
					{children}
				</body>
			</html>
		</StoryblokProvider>
	)
}

export default RootLayout
