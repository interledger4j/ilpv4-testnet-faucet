import React from 'react'
import Loader from 'react-loader-spinner'

const Spinner = () => {
  return (
    <Loader
      type="TailSpin"
      color="#2563EB"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  )
}

export default Spinner
