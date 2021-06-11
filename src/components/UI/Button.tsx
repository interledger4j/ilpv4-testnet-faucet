import React, { ButtonHTMLAttributes } from 'react'
import classNames from 'classnames'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={classNames(
        'px-4 py-4 bg-blue-600 border-blue-600 border-2 text-white font-bold text-lg hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600',
        props.className
      )}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default Button
