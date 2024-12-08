import React from 'react'
interface props{
    children: React.ReactNode
    className?: string
}
const Container = ({children,className}:props) => {
  return (
    <div className={`${className} max-w-[1177px] mx-auto `}>
        {children}
    </div>
  )
}

export default Container