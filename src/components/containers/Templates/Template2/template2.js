import { createRef, useRef, useEffect } from "react";
import { gsap } from "gsap";

import { Figure, Title } from '../../../blocks';

const Template2 = (props) => {
    let imageInfo = props.imageInfo;
    let colorScheme = props.scheme;

    const img = useRef();
    const titleRefs = useRef([]);
    const title = useRef(['A DEV', 'CAN BE', 'A DESIGNER']);

    if (titleRefs.current.length !== title.current.length) {
        titleRefs.current = Array(title.current.length).fill().map((_, i) => titleRefs.current[i] || createRef());
    }

    let tl = gsap.timeline();

    useEffect(() => {
        gsap.set(img.current, {
            xPercent: -35,
            yPercent: -25
        });

        window.addEventListener('mousemove', (e) => {
            gsap.to(img.current, {
                duration: 0.5,
                ease: "power1.out",
                x: e.clientX,
                y: e.clientY
            })
        })

        title.current.forEach((piece, idx) => {
            titleRefs.current[idx].current.addEventListener('mouseover', () => {
                img.current.classList.add('visible')
            })

            titleRefs.current[idx].current.addEventListener('mouseleave', () => {
                img.current.classList.remove('visible')
            })
        })
    }, [tl])

    return (
        <div id={'t2-main'}>
            <Figure
                ref={img}
                imageInfo={imageInfo}
                className={"t2-figure"}
            />
            <div className={"t2-title"}>
                {title.current.map((piece, idx) => {
                    return (
                        <Title
                            key={idx}
                            content={piece}
                            color={colorScheme.txtColor}
                            ref={titleRefs.current[idx]}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Template2;