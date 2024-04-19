import React from 'react'

const Button = ({buttonTitle,styleClasses}) => {
  return (
    <button className={`bg-[#FF3800] ${styleClasses}`}>{buttonTitle}</button>
  )
}

export default Button