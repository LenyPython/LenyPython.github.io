import { MutableRefObject, useEffect } from 'react'
import gsap from 'gsap'

const useGsapFrom = (refs: MutableRefObject<any>, options?: any): void => {
	useEffect(() => {
		if (!refs.current) return
		gsap.from(refs.current, {
			...options
		})
	})
}

export default useGsapFrom
