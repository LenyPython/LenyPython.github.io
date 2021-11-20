import { ProjectDataInterface } from '../types/Interfaces'

const REACT = 'react'
const ROUTER = 'react-router'
const REDUX = 'redux'
const SAGA = 'redux-saga'
const FIREBASE = 'firebase'
const TS = 'typescript'
const CSS = 'css'
const STYLED = 'styled-components'


const projData: ProjectDataInterface[] = [
	{
		title: 'Library',
		images: [],
		tech: [CSS, STYLED, TS, REACT, REDUX, ROUTER, FIREBASE, SAGA],
		code: 'https://github.com/LenyPython/someRandomLibrary',
		live: 'https://lenypython.github.io/someRandomLibrary/',
		description: `
		Side project that simulates a library app. It has two users states admin and user. You can register and login using email from firebase/auth. Admin accounts can update data base( Create, Read, Update, Delete book entries in library), give admin privlidges to other users/accounts. They can also fetch book data from OpenLibrary API and add them to DB by providing correct 10 or 13 char ISBN number.

		Users can browse and borrow book. There is small 'reading screen' in 'My borrowed books' section. (Read, Update)
		`
	}
]

export default projData
