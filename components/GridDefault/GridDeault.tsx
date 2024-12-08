import React from 'react'
import Hero from '../Hero'
import Sort from '../Sort'
import { IoGrid } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import ShopGridItems from './ShopGridItems';
import Container from '@/shared/Container';
import image1 from "../../images/grid1.png"
import image2 from "../../images/grid2.png"
import image3 from "../../images/grid3.png"
import image4 from "../../images/grid4.png"
import image5 from "../../images/grid5.png"
import image6 from "../../images/grid6.png"
import image7 from "../../images/grid7.png"
import image8 from "../../images/grid8.png"
import image9 from "../../images/grid9.png"
import image10 from "../../images/grid10.png"
import image11 from "../../images/grid11.png"
import image12 from "../../images/grid12.png"
import Partner from '../Partner';


const GridDeault = () => {
  return (
    <div>
      <Hero heading='Shop Grid Default' tittle='Home . Pages .' text='Shop Grid Default' />
      <Sort heading='Ecommerce Acceories & Fashion item ' about='About 9,620 results (0.62 seconds)' tittle='Per Page:' tittle1='Sort By:' tittle2='View:' icons={[<IoGrid />,<FaList/>]} />
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center">
      
      <ShopGridItems tittle='Vel elit euismod' price='$26.00 ' price1='$42.00'  image={image1}/>
      <ShopGridItems tittle='Ultricies condimentum imperdiet' price='$26.00' price1='$42.00'  image={image2}/>
      <ShopGridItems tittle='Vitae suspendisse sed' price='$26.00' price1='$42.00'  image={image3} />
      <ShopGridItems tittle='Sed at fermentum' price='$26.00' price1='$42.00'  image={image4}  />
      <ShopGridItems tittle='Fusce pellentesque at' price='$26.00' price1='$42.00'  image={image5}/>
      <ShopGridItems tittle='Vestibulum magna laoreet' price='$26.00' price1='$42.00'  image={image6} />
      <ShopGridItems tittle='Sollicitudin amet orci' price='$26.00' price1='$42.00'  image={image7} />
      <ShopGridItems tittle='Ultrices mauris sit' price='$26.00' price1='$42.00'  image={image8} />
      <ShopGridItems tittle='Pellentesque condimentum ac' price='$26.00' price1='$42.00'  image={image9}  />
      <ShopGridItems tittle='Cras scelerisque velit' price='$26.00' price1='$42.00'  image={image10} />
      <ShopGridItems tittle='Lectus vulputate faucibus' price='$26.00' price1='$42.00'  image={image11}/>
      <ShopGridItems tittle='Purus risus, ut' price='$26.00' price1='$42.00'  image={image12}  />
      
      </Container>
      <Partner/>
    </div>
  )
}

export default GridDeault
