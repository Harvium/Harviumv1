import { useEffect, useRef } from "react";
import { useAnimation, useInView } from "framer-motion";


const useReveal = () => {

    const ref = useRef(null)

    const isInView = useInView(ref)

    const revealControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            revealControls.start('visible')
        }
    }, [isInView, revealControls])

    return {
        ref,
        revealControls,
    }
}
export default useReveal
