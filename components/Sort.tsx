import Container from '@/shared/Container'
import React from 'react'
import { SortProps } from './file'

const Sort = ({heading,about,tittle,tittle1,tittle2,icons}:SortProps) => {
  return (
    <div >
        <Container>
          <div>
            <h1>
              {heading}
            </h1>
            <p>
              {about}
            </p>
          </div>
          <div>
            <h2>
              {tittle} <span><input type="text" className='bg-[#F5F5F5]'/></span>
            </h2>
            <h2>
              {tittle2}
            </h2>
          </div>
             </Container>
    </div>
  )
}

export default Sort