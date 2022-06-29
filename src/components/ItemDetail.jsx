import React from 'react';
import { Divider, Grid, Typography, Button, Box } from '@mui/material';
import { ItemCount } from './ItemCount';
import { useNavigate } from 'react-router-dom';

const ItemDetail = ({ data, loading, error }) => {

  const navigate = useNavigate();

  return (
    <>
      {
        loading 
        ? <p>Loading NFT</p>
        : <Grid container spacing={1} style={{maxWidth: 1100, margin: "0 auto", marginTop: 60}}>
            <Grid item sm={6}>
              <Grid container>
                <img src={data?.image} height={450} width={500} className='item-detail__img'/>
              </Grid>
            </Grid>
            <Grid item sm={6}>
              <Grid container direction="column" style={{height: '100%'}}>
                <Typography variant="subtitle1">{data?.category}</Typography>
                <Divider />
                <Box mt={4}>
                  <Typography variant="h4" mb={2}>{data.title}</Typography>
                  <Typography variant="subtitle1" mb={2}>{data?.description}</Typography>
                  <Typography variant="h5" mb={3}>${data.price}</Typography>
                </Box>
                <Button variant="contained" color="primary" onClick={() => navigate(-1)}>Volver</Button>
                {/* <ItemCount stock={10} key={data.id} onAdd={() => alert('product added')}/> */}
              </Grid>
            </Grid>
          </Grid>
      }
    </>
  )
}

export default ItemDetail