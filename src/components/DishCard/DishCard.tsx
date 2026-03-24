// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import type { IDish } from '../../types';
// import { Button, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { useCart } from '../../context/CartContext';

// interface Props {
//   dish: IDish;
// }

// export const DishCard = ({ dish }: Props) => {
//   const navigate = useNavigate();
//   const { addToCart } = useCart();

//   return (
//     <Card>
//       <CardContent>
//         <Typography variant='h6'>
//           {dish.name}
//         </Typography>
//         <Typography variant='body2'>
//           {dish.price} $
//         </Typography>
//       </CardContent>

//       <CardActions>
//         <Button onClick={() => navigate(`/dish/${dish.id}`)}>
//           Show more
//         </Button>

//         <Button onClick={() => addToCart(dish)}>
//           Add to Basket
//         </Button>
//       </CardActions>
//     </Card>
//   );
// };


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import type { IDish } from '../../types';
import { IconButton, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface Props {
  dish: IDish;
}

export const DishCard = ({ dish }: Props) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

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

      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        
        <Typography
          sx={{ cursor: 'pointer' }}
          onClick={() => navigate(`/dish/${dish.id}`)}
        >
          Подробнее
        </Typography>

        <IconButton onClick={() => addToCart(dish)}>
          <ShoppingCartIcon />
        </IconButton>

      </CardActions>
    </Card>
  );
};