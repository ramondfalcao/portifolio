import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./Skills.css"
import { technologies } from "../data"
import iconGithub from '../assets/iconGithub.svg';

const animation = { duration: 5000, easing: (t) => t }


export function Skills() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(2, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 2, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 2, true, animation)
    },
  })
  return (
    <section className="technologies-container">
      <h2 className="tec">
        Technologies:
      </h2>
      <div ref={sliderRef} className="keen-slider">
        {technologies.map((item) =>(
          <img
            alt={item.name}
            src={item.icon}
            className="keen-slider__slide number-slide1"
            />
        ))}
        <img
            alt="github"
            src={ iconGithub }
            className="keen-slider__slide number-slide1"
            />
      </div>
    </section>
  )
  }


export default Skills;
