import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosApi } from "../../axiosApi";
import type { IDishShort } from "../../types";
import { Button, Typography, Card, CardContent } from "@mui/material";

export const Dish = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [dish, setDish] = useState<IDishShort | null>(null);

  const fetchDish = async () => {
    const response = await axiosApi.get<IDishShort>(`/dishes/${id}.json`);
    setDish(response.data);
  };

  const deleteDish = async () => {
    await axiosApi.delete(`/dishes/${id}.json`);
    navigate('/');
  };

  useEffect(() => {
    void fetchDish();
  }, []);

  if (!dish) return <p>Loading...</p>;

  return (
    <Card sx={{ maxWidth: 400, margin: '20px auto' }}>
      <CardContent>
        <Typography variant="h5">{dish.name}</Typography>
        <Typography>{dish.description}</Typography>
        <Typography>{dish.price} $</Typography>

        <Button
          color="error"
          variant="contained"
          onClick={deleteDish}
          sx={{ mt: 2 }}
        >
          Delete
        </Button>

        <Button
          variant="outlined"
          onClick={() => navigate(`/dish/${id}/edit`)}
          sx={{ mt: 2, ml: 2 }}
        >
          Edit
        </Button>
      </CardContent>
    </Card>
  );
}; 