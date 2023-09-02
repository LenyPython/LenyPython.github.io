import { useEffect } from 'react'
import SvgProvider, {
	SocialEnum
} from '@/Global/components/SvgProvider/SvgProvider'

/*
const Container = styled.div`
  background: var(--main-background-color);
  border: 2px solid var(--main-font-color);
  padding: 1.5em;
  border-radius: 15px;
  display: flex;
  margin-bottom: 2em;
  ul {
    list-style: none;
  }
  & > div,
  ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-right: 2.5em;
  }
  .flex-col {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    & > div,
    ul {
      text-align: center;
      margin: 0.5em;
      align-items: center;
    }
  }
`;
*/
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
		width: 50,
		height: 50,
		color: 'hsla(120,100%,50%,1)'
	}
	return (
		<>
			<div className='border flex'>
				<div>
					<h2>CodeWars Profile:</h2>
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
			<div className='border flex'>
				<div>
					<h2>LeetCode Profile:</h2>
					<a
						href='https://leetcode.com/LenyPython/'
						target='_blank'
						rel='noreferrer'
					></a>
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
				<div>
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
				<div>
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
			</div>
			<div className='border flex'>
				<div>
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
				<div>
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
				<div>
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
