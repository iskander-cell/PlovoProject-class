import { useCallback, useEffect, useState } from 'react';
import type { IDish, IDishList } from '../../types';
import { axiosApi } from '../../axiosApi';
import { DishCard } from '../../components/DishCard/DishCard';
import { Typography } from '@mui/material';
import styles from './styles.module.css';

export const Home = () => {
  const [dishes, setDishes] = useState<IDish[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchDishes = useCallback(async () => {
    try {
      setLoading(true);

      const response = await axiosApi.get<IDishList | null>('/dishes.json');
      const data = response.data;

      if (!data) return;

      const dishesArray: IDish[] = Object.keys(data).map(key => ({
        ...data[key],
        id: key,
      }));

      setDishes(dishesArray);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchDishes();
  }, [fetchDishes]);

  return (
    <div>
      <Typography align='center' variant='h4'>
        Dishes list
      </Typography>

      <div className={styles.wrapper}>
        {dishes.map(dish => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>
    </div>
  );
};