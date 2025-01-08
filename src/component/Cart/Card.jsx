import { Divider, Card, Button, Modal, Box, TextField } from '@mui/material';
import React from 'react';
import CartItem from './CartItem';
import AddressCard from './AddressCard';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { ErrorMessage, Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import  {Grid2}  from '@mui/material';


export const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  outline : 'none',
  boxShadow: 24,
  p: 4,
};

const initialValues = {
  streetAddress: "",
  state: "",
  pincode: "",
  city: "",
 
}

const handleSubmit = (values) => {
  console.log(values);

}

const validationSchema = Yup.object().shape({
  streetAddress: Yup.string().required('Street Address is required'),
  state: Yup.string().required('State is required'),
  pincode: Yup.number().required('Pincode is required'),
  city: Yup.string().required('City is required'),
 
})

const items = [1,1];

const Cart =() => {
  const createOrderUsingSelectedAddress = () => {
      
  }
  const handleOpenAddressModel = () => {
    setOpen(true);

  }
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  return (
    
    <>
      <main className='lg:flex justify-between'>
        <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
        {items.map((item) => <CartItem/>)}
        
        <Divider/>
        <div className='billDetails px-5 text-sm'>
          <p className='font-extralight py-5'>Bill Details</p>
          <div className='space-y-3'>

            <div className='flex justify-between text-gray-400'>
              <p>Item Total</p>
              <p>$400</p>
            </div>
            <div className='flex justify-between text-gray-400'>
              <p>Deliver Fee</p>
              <p>$20</p>
            </div>
            <div className='flex justify-between text-gray-400'>
              <p>GST Fee</p>
              <p>$20</p>
            </div>
            <div className='flex justify-between text-gray-400'>
              <p>Resturant Charges</p>
              <p>$20</p>
            </div>
            <Divider/>
            <div className='flex justify-between text-gray-400'>
              <p>Total Pay</p>
              <p>$460</p>
            </div>
          </div>

        </div>

        </section>
        <Divider orientation='vertical' flexItem/>
        <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'>
        <div>
          <div>
            <h1 className='text-3xl font-semibold text-center py-10'>Choose Delivery Address</h1>
          </div>
          <div className='flex gap-5 flex-wrap justify-center'>
            {[1,1,1].map((item) => ( 
              <AddressCard handleSelectAddress={createOrderUsingSelectedAddress} item={item} showButton={true}/>
            ))}
            <Card className='flex gap-5 w-64 p-5'>
            <AddLocationAltIcon />
      <div className='space-y-3 text-gray-500'>
        <h1 className='font-semibold text-lg text-white'>Add New Address</h1>
        <p>Add your home, office, or delivery location</p>
          <Button variant="contained" fullWidth onClick={handleOpenAddressModel}> 
          Add
          </Button>
      </div>
    </Card>
          </div>

        </div>
        </section>

      </main>
      <Modal open={open} onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Formik 
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}>
            <Form >
            <Grid2 container spacing={3}>
              <Grid2 item xs={12}>
                <Field as={TextField}
                name="streetAddress"
                label="street Address"
                fullWidth
                variant="outlined"
                error={!ErrorMessage("streetAddress")}
                helperText={
                  <ErrorMessage name='fieldName' >
                    {(msg) => <span className='text-red-600'>{JSON.stringify(msg)}</span>}
                  </ErrorMessage>
                }>

                </Field>
              </Grid2>
              <Grid2 item xs={12}>
                <Field as={TextField}
                name="state"
                label="state"
                fullWidth 
                variant="outlined"
                error={!ErrorMessage("state")}
                helperText={
                  <ErrorMessage name='fieldName' >
                    {(msg) => <span className='text-red-600'>{JSON.stringify(msg)}</span>}
                  </ErrorMessage>
                }>

                </Field>
              </Grid2>
              <Grid2 item xs={12}>
                <Field as={TextField}
                name="city"
                label="city"
                fullWidth 
                variant="outlined"
                error={!ErrorMessage("city")}
                helperText={
                  <ErrorMessage name='fieldName' >
                    {(msg) => <span className='text-red-600'>{JSON.stringify(msg)}</span>}
                  </ErrorMessage>
                }>

                </Field>
              </Grid2>

              <Grid2 item xs={12}>
                <Field as={TextField}
                name="pincode"
                label="pincode"
                fullWidth 
                variant="outlined"
                error={!ErrorMessage("pincode")}
                helperText={
                  <ErrorMessage name='fieldName' >
                    {(msg) => <span className='text-red-600'>{JSON.stringify(msg)}</span>}
                  </ErrorMessage>
                }>

                </Field>
              </Grid2>
              <Grid2 item xs={12}>
                <Button fullWidth variant='contained' type='submit' color='primary'>Deliver Here</Button>

              </Grid2>

            </Grid2>

            </Form>
          </Formik>

        </Box>

      </Modal>
    </>
  )
} 
export default Cart;