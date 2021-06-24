import * as React from "react"
import {CircleProgress} from 'react-gradient-progress'

const SkillContent = (props) => {
    console.log(props)
    return (
        <CircleProgress percentage={props.percentage} strokeWidth={8} />
    )
}

export default SkillContent


