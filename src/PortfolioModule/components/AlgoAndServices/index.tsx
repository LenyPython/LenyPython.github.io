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

const Algo = () => {
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
		'flex justify-between p-10 w-full mb-5 shadow-main shadow-font rounded-xl backdrop-blur-lg'
	const justify = 'flex flex-col items-center'
	return (
		<>
			<div className={container}>
				<div className={justify}>
					<h2 className='mb-5'>CodeWars Profile:</h2>
					<a
						href='https://www.codewars.com/users/LenyPython/'
						target='_blank'
						rel='noreferrer'
					>
						<SvgProvider type={SocialEnum.codewars} options={SVGOptions} />
					</a>
					<a
						href='https://www.codewars.com/users/LenyPython/'
						target='_blank'
						rel='noreferrer'
					>
						visit profile
					</a>
				</div>
				{cwData ? (
					<>
						<ul>
							<li>
								Username: <br />
								{cwData.username}
							</li>
							<li>
								Completed katas:
								<br /> {cwData.codeChallenges.totalCompleted}
							</li>
							<li>
								Ranking position:
								<br /> {cwData.leaderboardPosition}
							</li>
							<li>
								Overall skills:
								<br /> {cwData.ranks.overall.score} score,
								<br /> {cwData.ranks.overall.rank} rank
							</li>
						</ul>
						<div>
							Languages trained:
							<ul>
								{Object.keys(cwData.ranks.languages).map((key: string) => {
									return (
										<li key={key}>
											{`
										${key}: 
										${cwData.ranks.languages[key].name},
										score: ${cwData.ranks.languages[key].score}
										`}
										</li>
									)
								})}
							</ul>
						</div>
					</>
				) : (
					<h3>Loadding Codewars data...</h3>
				)}
			</div>
			<div className={container}>
				<div className={justify}>
					<h2 className='mb-5'>LeetCode Profile:</h2>
					<a
						href='https://leetcode.com/LenyPython/'
						target='_blank'
						rel='noreferrer'
					>
						<SvgProvider type={SocialEnum.leetcode} options={SVGOptions} />
					</a>
					<a
						href='https://leetcode.com/LenyPython/'
						target='_blank'
						rel='noreferrer'
					>
						visit profile
					</a>
				</div>
				<div>
					Progress: <br />
					488 problems <br />
					225 easy
					<br />
					251 medium <br />
					12 Hard <br />
				</div>
				<Gallery />
			</div>
			<div className={container}>
				<div className={justify}>
					<h2>Frontend Mentor</h2>
					<a
						href='https://www.frontendmentor.io/profile/LenyPython'
						target='_blank'
						rel='noreferrer'
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
					>
						<SvgProvider type={SocialEnum.replit} options={SVGOptions} />
					</a>
					<a
						href='https://replit.com/@PiotrLenartowic'
						target='_blank'
						rel='noreferrer'
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
					>
						<SvgProvider type={SocialEnum.codepen} options={SVGOptions} />
					</a>
					<a
						href='https://codepen.io/lenypython'
						target='_blank'
						rel='noreferrer'
					>
						visit profile
					</a>
				</div>
			</div>
		</>
	)
}

export default Algo
