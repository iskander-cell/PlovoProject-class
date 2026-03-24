import { useCart } from "../../context/CartContext";
import { Typography, Button } from "@mui/material";

export const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4">Basket</Typography>

      {cart.length === 0 && <Typography>Basket is empty</Typography>}

      {cart.map(item => (
        <div key={item.id}>
          <Typography>
            {item.name} x {item.quantity} = {item.price * item.quantity} $
          </Typography>

          <Button
            color="error"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </Button>
        </div>
      ))}

      <Typography variant="h5" sx={{ mt: 2 }}>
        Total: {total} $
      </Typography>
    </div>
  );
};