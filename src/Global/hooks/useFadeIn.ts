import { MutableRefObject, useEffect } from 'react'
import gsap from 'gsap'

const useFadeIn = (refs: MutableRefObject<any>, options?: any): void => {
	useEffect(() => {
		if (!refs.current) return
		gsap.from(refs.current, {
			scrollTrigger: refs.current,
			...options
		})
	})
}

export default useFadeIn
