import React from 'react'
import Parent from '../components/Parent'

const About = () => {
    const element = <div>hell world</div>;
  return (
    <div>
        <p>{element}</p>{/* {you can write any java script code in side"{}"} */}
        <Parent/>
    </div>
  )
}

export default About