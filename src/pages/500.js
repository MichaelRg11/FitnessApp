import React from 'react'
import '../components/styles/Errors.css'
import FatalErrorImg from '../images/500.png'

const FatalError = () => (
  <React.Fragment className="text-center">
    <h1 className="Error_Text">Error: 500 Unexpected Error</h1>
    <img src={FatalErrorImg} alt="500 Unexpected Error" className="Error_Image" />
  </React.Fragment>
)

export default FatalError