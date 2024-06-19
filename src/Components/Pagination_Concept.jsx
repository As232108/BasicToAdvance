import React, { useState } from 'react'

const Pagination_Concept = ({items,itemsPerpage}) => {

  const [currentPage , setcurrentpage]=useState(1)
  const indexofLastItem=currentPage*itemsPerpage
  const indexOfFirstItem=indexofLastItem-itemsPerpage
  const CurrentItems=items.slice(indexOfFirstItem,indexofLastItem)
  const Pagenumber=[];
  for(let i=1; i<Math.ceil(items.length/itemsPerpage); i++){
    Pagenumber.push(i);
  }
  return (
    <div>
      <ul>
        {CurrentItems.map((item,index)=>{
          return <li key={index}>{item}</li>
        })}
      </ul>
      {Pagenumber.map((number)=>{
       return <li key={number} onClick={()=>setcurrentpage(number)}>
          {number}
          </li>
      })}
    </div>
  )
}

export default Pagination_Concept
