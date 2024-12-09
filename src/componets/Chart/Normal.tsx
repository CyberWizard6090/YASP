import React from 'react'
import { FormatNumber } from './FormatNumber'

type Props = {
    data:number
    size:number
    label:string
}

export const Normal = ({data,size,label}: Props) => {
  return (
    <div>
    <div className="column ">
        <div className="cell normal" style={{height: size === 0 || data === 0 ? "0px" : size * data + "px"}}>
        <span>{FormatNumber(data)}</span>
        </div>
  
    </div>
    <span className='column-name'>{label}</span>
  </div>
  )
}

