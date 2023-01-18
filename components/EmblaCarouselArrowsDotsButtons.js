import React from 'react'

export const DotButton = (props) => {
  const { selected, onClick } = props

  return (
    <button
      className={'embla__dot'.concat(selected ? ' embla__dot--selected' : '')}
      type="button"
      onClick={onClick}
    />
  )
}