import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
            onClick={() => navigate('/')}
          >
            <FastfoodIcon />
          </IconButton>

          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Plovo
          </Typography>

          <Button color="inherit" onClick={() => navigate('/cart')}>
            Basket
          </Button>

          <Button color="inherit" onClick={() => navigate('/dish/create')}>
            Add Dish
          </Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
};