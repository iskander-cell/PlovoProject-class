import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosApi } from "../../axiosApi";
import DishForm from "../../components/DishForm/DishForm";
import type { IDishShort } from "../../types";

export const EditDish = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [dish, setDish] = useState<IDishShort | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchDish = async () => {
    const response = await axiosApi.get<IDishShort>(`/dishes/${id}.json`);
    setDish(response.data);
  };

  const updateDish = async (dishData: IDishShort) => {
    try {
      setLoading(true);
      await axiosApi.put(`/dishes/${id}.json`, dishData);
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchDish();
  }, []);

  if (!dish) return <p>Loading...</p>;

  return (
    <DishForm
      onSubmit={updateDish}
      loading={loading}
      initialData={dish}
    />
  );
};