import { ProjectDataInterface } from '../types/Interfaces'

const REACT = 'react'
const ROUTER = 'react-router'
const REDUX = 'redux'
const SAGA = 'redux-saga'
const FIREBASE = 'firebase'
const TS = 'typescript'
const JS = 'javascript'
const CSS = 'css'
const STYLED = 'styled-components'
const RWD = 'resposive'


const projData: ProjectDataInterface[] = [
	{
		title: 'Library',
		images: {
			path: 'img/library/',
			no:  6
		},
		tech: [CSS, STYLED, TS, REACT, REDUX, ROUTER, FIREBASE, SAGA],
		code: 'https://github.com/LenyPython/someRandomLibrary',
		live: 'https://lenypython.github.io/someRandomLibrary/',
		description: `
		Side project that simulates a library app. It has two users states admin and user. You can register and login using email from firebase/auth. Admin accounts can update data base( Create, Read, Update, Delete book entries in library), give admin privlidges to other users/accounts. They can also fetch book data from OpenLibrary API and add them to DB by providing correct 10 or 13 char ISBN number.

		Users can browse and borrow book. There is small 'reading screen' in 'My borrowed books' section. (Read, Update)
		`
	},
	{
		title: 'Calculator',
		images: {
			path: 'img/calculator/',
			no:  3
		},
		tech: [CSS, STYLED, JS, REACT, RWD],
		code: 'https://github.com/LenyPython/Calculator-project',
		live: 'https://lenypython.github.io/Calculator-project/',
		description: `
		Calculator made using react. Used css variables for triple theme change.
		Learned a bit custom react hooks, CSS Grid.
		Responsive web design.
		`
	},
	{
		title: 'URL shortening API landing page',
		images: {
			path: 'img/shorten/',
			no:  4
		},
		tech: [CSS, STYLED, JS, REACT, RWD],
		code: 'https://github.com/LenyPython/URL-shortening-API-landing-page',
		live: 'https://lenypython.github.io/URL-shortening-API-landing-page/',
		description: `
		Simple RWD landing page for URL shortening API. Learned a bit custom SVG creation and animation.
				Responsive web design, CSS Flex.
		`
	}
]

export default projData
