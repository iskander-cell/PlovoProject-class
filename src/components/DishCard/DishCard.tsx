import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import type { IDish } from '../../types';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface Props {
  dish: IDish;
}

export const DishCard = ({ dish }: Props) => {
  const navigate = useNavigate();

  return (
    <Card>
      <CardContent>
        <Typography variant='h6'>
          {dish.name}
        </Typography>
        <Typography variant='body2'>
          {dish.price} $
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => navigate(`/dish/${dish.id}`)}>
          Show more
        </Button>
      </CardActions>
    </Card>
  );
};