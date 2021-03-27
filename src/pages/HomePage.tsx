import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export const HomePage:React.FC = () => {
  return (
    <Grid xs={12} className="grid">
      <Typography variant="h1">Welcome to DummyApi.io, where you can beautiful apps with real API calls!</Typography>
    </Grid>
  )
}