import React from 'react'
import Item from './Item'

type Props = {
  data:any
}

export const Legends = ({data}: Props) => {
  const dataArray = Object.values(data);
  return (
    <div className='Legends'>
      {dataArray.map((item, index) => (
        <Item key={index} label={item.label} color={item.color} />
      ))}
        
    </div>
  )
}

