import Box from '@/components/Small/Box/Box'
import React from 'react'

const Grid = ({data,activeIndex }) => {
  return (
    <>
        {
            data && data.map((data,index)=>{
                return <div  key={index}>
                <Box key={data.id} title={data.title} context={data.context} icon={data.icon} first={index === activeIndex}/>
                </div>
            })
        }
    </>
  )
}

export default Grid