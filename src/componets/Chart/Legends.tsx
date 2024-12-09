import React from 'react'
import Item from './Item'
type LegendItem = {
  label: string;
  color: string;
};
type Props = {
  data:any
}

export const Legends = ({data}: Props) => {
  const dataArray: LegendItem[] = Object.values(data);
  return (
    <div className='Legends'>
      {dataArray.map((item, index) => (
        <Item key={index} label={item.label} color={item.color} />
      ))}
        
    </div>
  )
}

