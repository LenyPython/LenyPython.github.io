'use client'
import { useEffect, useState } from 'react'
import SvgProvider, {
	SocialEnum
} from '@/Global/components/SvgProvider/SvgProvider'
import Gallery from './gallery'

type RankType = {
	rank: number
	name: string
	color: string
	score: number
}

type CwDataType = {
	username: string
	name: string
	clan: string
	codeChallenges: {
		totalAuthored: number
		totalCompleted: number
	}
	honor: number
	leaderboardPosition: number
	ranks: {
		languages: {
			[key: string]: RankType
		}
		overall: RankType
	}
}
type Props = {
	progress: {
		easy: number
		medium: number
		hard: number
	}
}

const Algo: React.FC<Props> = ({ progress }) => {
	const { easy, medium, hard } = progress
	const [cwData, setCwData] = useState<CwDataType | null>(null)
	useEffect(() => {
		const getData = async () => {
			try {
				const response = await fetch(
					'https://www.codewars.com/api/v1/users/LenyPython'
				)
				const data = await response.json()
				setCwData(data)
			} catch (e) {
				setTimeout(getData, 5000)
			}
		}
		getData()
	}, [])
	const SVGOptions = {
		width: 75,
		height: 75,
		color: 'hsla(120,100%,50%,1)'
	}
	const container =
		'flex flex-wrap justify-around gap-10 p-5 my-7 shadow-main shadow-font rounded-xl backdrop-blur-lg sm:p-10'
	const justify = 'flex flex-col items-center'
	return (
		<>
			<div className={`cwContainer ${container} -rotate-3 lg:-rotate-6`}>
				<div className={justify}>
					<h2 className='mb-5'>CodeWars Profile:</h2>
					<a
						href='https://www.codewars.com/users/LenyPython/'
						target='_blank'
						rel='noreferrer'
						aria-label='Codewars logo, link to profile'
					>
						<SvgProvider type={SocialEnum.codewars} options={SVGOptions} />
					</a>
					<a
						href='https://www.codewars.com/users/LenyPython/'
						target='_blank'
						rel='noreferrer'
						aria-label='link to Codewars profile'
					>
						visit profile
					</a>
				</div>
				<ul>
					<li>
						Username: <br />
						{cwData?.username ?? 'LenyPyton'}
					</li>
					<li>
						Completed katas:
						<br /> {cwData?.codeChallenges?.totalCompleted ?? 'completed'}
					</li>
					<li>
						Ranking position:
						<br /> {cwData?.leaderboardPosition ?? 'position'}
					</li>
					<li>
						Overall skills:
						<br /> {cwData?.ranks?.overall?.score ?? ''} score,
						<br /> {cwData?.ranks?.overall?.rank ?? ''} rank
					</li>
				</ul>
				<div>
					Languages trained:
					<ul>
						{cwData ? (
							Object.keys(cwData.ranks.languages).map((key: string) => {
								return (
									<li key={key}>
										{`
										${key}: 
										${cwData.ranks.languages[key].name},
										score: ${cwData.ranks.languages[key].score}
										`}
									</li>
								)
							})
						) : (
							<>loading data</>
						)}
					</ul>
				</div>
			</div>
			<div
				className={`lcContainer ${container} self-start rotate-2 md:ml-5 lg:rotate-6`}
			>
				<div className={justify}>
					<h2 className='mb-5'>LeetCode Profile:</h2>
					<a
						href='https://leetcode.com/LenyPython/'
						target='_blank'
						rel='noreferrer'
						aria-label='LeetCode logo, link to profile'
					>
						<SvgProvider type={SocialEnum.leetcode} options={SVGOptions} />
					</a>
					<a
						href='https://leetcode.com/LenyPython/'
						target='_blank'
						rel='noreferrer'
						aria-label='link to LeetCode profile'
					>
						visit profile
					</a>
				</div>
				<div>
					Progress: <br />
					{easy + medium + hard} problems <br />
					{easy} easy
					<br />
					{medium} medium <br />
					{hard} Hard <br />
				</div>
				<Gallery />
			</div>
			<div
				className={`otherContainer ${container} self-end -rotate-6 md:mr-5 lg:-rotate-12`}
			>
				<div className={justify}>
					<h2>Frontend Mentor</h2>
					<a
						href='https://www.frontendmentor.io/profile/LenyPython'
						target='_blank'
						rel='noreferrer'
						aria-label='Fronend Mentor logo, link to profile'
					>
						<SvgProvider
							type={SocialEnum.frontendMentor}
							options={SVGOptions}
						/>
					</a>
					<a
						href='https://www.frontendmentor.io/profile/LenyPython'
						target='_blank'
						rel='noreferrer'
						aria-label='visit Frontend Mentor profile'
					>
						visit profile
					</a>
				</div>
				<div className={justify}>
					<h2>Replit</h2>
					<a
						href='https://replit.com/@PiotrLenartowic'
						target='_blank'
						rel='noreferrer'
						aria-label='Replit logo, link to profice'
					>
						<SvgProvider type={SocialEnum.replit} options={SVGOptions} />
					</a>
					<a
						href='https://replit.com/@PiotrLenartowic'
						target='_blank'
						rel='noreferrer'
						aria-label='visit Replit profile'
					>
						visit profile
					</a>
				</div>
				<div className={justify}>
					<h2>Codepen</h2>
					<a
						href='https://codepen.io/lenypython'
						target='_blank'
						rel='noreferrer'
						aria-label='Codepen logo, link to profile'
					>
						<SvgProvider type={SocialEnum.codepen} options={SVGOptions} />
					</a>
					<a
						href='https://codepen.io/lenypython'
						target='_blank'
						rel='noreferrer'
						aria-label='visit Codepen profile'
					>
						visit profile
					</a>
				</div>
			</div>
		</>
	)
}

export default Algo
