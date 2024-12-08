import React from 'react'
interface props{
    children: React.ReactNode
    className?: string
}
const Container = ({children,className}:props) => {
  return (
    <div className={`${className} px-4 lg:px-0 max-w-[1177px] mx-auto `}>
        {children}
    </div>
  )
}

export default Container