import styled from 'styled-components'

const StyledInput = styled.input`
  --color: var(--main-font-color);
  margin: 2em auto;
  -webkit-appearance: none;
  width: 100%;
  height: 3px;
  border-radius: 5px;  
  background: linear-gradient(to left, hsl(360,100%,50%),
                                    hsl(300,100%,50%),
                                    hsl(240,100%,50%),
                                    hsl(180,100%,50%),
                                    hsl(120,100%,50%),
                                    hsl(60,100%,50%),
                                    hsl(0,100%,50%)
                             );


	&::-webkit-slider-thumb {
  -webkit-appearance: none;
  background: var(--color);
  border: none;
  appearance: none;
  width: 5px;
  height: 20px;
  border-radius: 0; 
  cursor: pointer;
  box-shadow: 0 0 5px var(--color),
              0 0 8px var(--color);
	}

	&::-moz-range-thumb {
  background: var(--color);
  border: none;
  width: 5px;
  height: 20px;
  border-radius: 0;
  cursor: pointer;
  box-shadow: 0 0 5px var(--color),
              0 0 8px var(--color);
}
`

interface Props {
	value: number
	min: string
	max: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const RangeSlider: React.FC<Props> = ({ min, max, value, onChange }) => {
	return (
      <StyledInput 
      type="range"
      min={min}
      max={max}
      onChange={onChange}
      value={value}
      />
	)
}

export default RangeSlider
