import { useEffect } from 'react'
import SvgProvider, {
	SocialEnum
} from '@/Global/components/SvgProvider/SvgProvider'

const profile = {
	username: 'leny',
	totalCompleted: 'all',
	languages: {
		js: {
			name: 'js',
			score: '100%'
		}
	},
	overall: {
		name: 'pio',
		score: 'great'
	},
	position: 'top 1%'
}
const Algo = () => {
	useEffect(() => {
		//   dispatch(getData());
	}, [])
	//profile from CW
	const langs = []
	for (let key in profile.languages) {
		langs.push(
			<li key={key}>
				{`
        ${key}: \n
        ${profile.languages[key].name}, score: ${profile.languages[key].score}
        `}
			</li>
		)
	}
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
				<ul>
					<li>
						Username: <br />
						{profile.username}
					</li>
					<li>
						Completed katas:
						<br /> {profile.totalCompleted}
					</li>
					<li>
						Ranking position:
						<br /> {profile.position}
					</li>
					<li>
						Overall skills:
						<br /> {profile.overall?.name ?? 'Piotr'}, score
						<br /> {profile.overall?.score ?? '0'}
					</li>
				</ul>
				<div>
					Languages trained:
					<ul>{langs}</ul>
				</div>
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
				<div className={justify}>
					<img
						src='https://assets.leetcode.com/static_assets/others/algorithm_I.png'
						width='75px'
						height='75px'
						alt='Algorithm I'
					/>
					<br />
					<b>Algorithm I</b>
					<br />
					<span>2021-10-24</span>
				</div>
				<div className={justify}>
					<img
						src='https://assets.leetcode.com/static_assets/others/DS_I.png'
						width='75px'
						height='75px'
						alt='Algorithm I'
					/>
					<br />
					<b>Data Structure I</b>
					<br />
					<span>2021-12-14</span>
				</div>
				<div className={justify}>
					<img
						src='https://assets.leetcode.com/static_assets/others/%E7%BC%96%E7%A8%8B%E8%83%BD%E5%8A%9B_%E5%85%A5%E9%97%A8.png'
						width='75px'
						height='75px'
						alt='Programming badge I'
					/>
					<br />
					<b>Programming Skills I</b>
					<br />
					<span>2022-03-11</span>
				</div>
				<div className={justify}>
					<img
						src='https://leetcode.com/static/images/badges/2022/lg/2022-annual-100.png'
						width='75px'
						height='75px'
						alt='100 Days badge 2022'
					/>
					<br />
					<b>100 Days Badge 2022</b>
					<br />
					<span>2023-01-01</span>
				</div>
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
