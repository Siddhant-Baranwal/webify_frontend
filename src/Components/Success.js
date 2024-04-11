import React from 'react'
import { useParams } from 'react-router-dom'

const Success = () => {
  const {text} = useParams();
  return (
    <div>
      <h1>Test</h1>
      <h1>{text}</h1>
    </div>
  )
}

export default Success
