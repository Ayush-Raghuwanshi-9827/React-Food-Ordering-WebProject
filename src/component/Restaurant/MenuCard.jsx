import React from 'react'

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { FormControlLabel, FormGroup, Radio } from '@mui/material';
import { CheckBox, Label } from '@mui/icons-material';


const ingredient = [
  {
    category:"nuts & seed",
    ingredients: ["Almonds","Cashews","Walnuts","Pecans","Flaxseeds","Sunflower seeds"]
  }, 
  {
    category:"vegetables",
    ingredients: ["Broccoli","Carrots","Cucumber","Onions","Zucchini","Tomatoes"]
  },
  {
    category:"Protien",
    ingredients: ["Ground beef","Bacon strips"]
  }
  
]

const MenuCard = () =>  {
  return (
    <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1-content"
      id="panel1-header"
    >
      <div className='lg:flex items-center justify-between'>
        <div className='lg:flex items-center lg:gap-5'>  
        <img className='w-[7rem] h-[7rem] object-cover' src='http://res.cloudinary.com/dcpesbd8q/image/upload/v1708317657/no8xfzdhsrdy4ezmcczr.jpg' alt=''/>
        </div>
        <div className='px-5 space-y-1 lg:space-y-5 lg:max-w-2xl'>
          <p className='font-semibold text-xl'>Burger</p>
          <p>499</p>
          <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero beatae praesentium ipsa natus aut architecto accusamus, debitis maiores? Saepe, voluptatum.</p>
        </div>
      </div>
    </AccordionSummary>
    <AccordionDetails>
      <form>
        <div className='flex gap-5 flex-wrap'>
          {
            ingredient.map((item) => 
              <div>
                <p>{item.category}</p>
              <FormGroup>
                {item.ingredients.map((item) => (
                  <FormControlLabel control={<Radio />}
                  label={item} />
                  ))}
                </FormGroup>
              </div>
            )
          }
        </div>
        <div className='pt-5'>
        <Button type='submit' disabled={false} variant='contained' color='primary'>{true?"add To Cart" : "Out of Stock"}</Button>
        </div>
      </form>
    </AccordionDetails>
  </Accordion>

  )
}
export default MenuCard;