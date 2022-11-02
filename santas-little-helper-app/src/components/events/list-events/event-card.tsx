import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const EVENT_NAME = "Event Name"
const EVENT_DATE = "24/12/2022"
const EVENT_PLACE = "Casa da Tia"

const DETAILS_STRING = "See details"

  
const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {EVENT_DATE}
        </Typography>
        <Typography variant="h5" component="div">
          {EVENT_NAME}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {EVENT_PLACE}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{DETAILS_STRING}</Button>
      </CardActions>
    </React.Fragment>
);
  
export default function EventCard() {
    return (
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{card}</Card>
      </Box>
    );
}