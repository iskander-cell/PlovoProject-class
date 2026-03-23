import styles from './styles.module.css';
import { Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import type { IDishShort } from "../../types";
import type { ChangeEvent, FormEvent } from 'react';

const INITIAL_FORM_STATE: IDishShort = {
  name: '',
  description: '',
  price: 0
};

interface Props {
  onSubmit: (dish: IDishShort) => void;
  loading: boolean;
  initialData?: IDishShort;
}

const DishForm = ({ onSubmit, loading, initialData }: Props) => {
  const [formState, setFormState] = useState<IDishShort>(
    initialData || INITIAL_FORM_STATE
  );

  useEffect(() => {
    if (initialData) {
      setFormState(initialData);
    }
  }, [initialData]);

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormState(prev => ({
      ...prev,
      [name]: name === 'price' ? Number(value) : value
    }));
  };

  const onFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(formState);
  };

  return (
    <form className={styles.form} onSubmit={onFormSubmit}>
      <TextField
        label="Dish name"
        value={formState.name}
        name="name"
        onChange={inputChangeHandler}
      />

      <TextField
        label="Description"
        value={formState.description}
        name="description"
        onChange={inputChangeHandler}
      />

      <TextField
        label="Price"
        value={formState.price}
        name="price"
        type="number"
        onChange={inputChangeHandler}
      />

      <Button loading={loading} type="submit" variant="contained">
        Save
      </Button>
    </form>
  );
};

export default DishForm;