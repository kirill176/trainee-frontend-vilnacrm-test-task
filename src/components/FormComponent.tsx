import { TextField, Button, Box, Grid2 } from '@mui/material';
import React from 'react';

import useForm from '@/hooks/useForm';

function FormComponent() {
  const { formValues, formErrors, setFormValues, handleInputChange, validateForm, setUser } =
    useForm();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      setUser();
      setFormValues({
        id: 0,
        name: '',
        email: '',
        phone: '',
        address: '',
      });
    }
  };

  return (
    <Box sx={{ maxWidth: '800px', m: 'auto', p: '5px', mt: '80px' }}>
      <form onSubmit={handleFormSubmit}>
        <Grid2>
          <Grid2 sx={{ display: 'flex', gap: '20px' }}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              type="text"
              value={formValues.name}
              onChange={handleInputChange}
              error={!!formErrors.name}
              helperText={formErrors.name}
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formValues.email}
              onChange={handleInputChange}
              error={!!formErrors.email}
              helperText={formErrors.email}
            />
          </Grid2>
          <Grid2 sx={{ display: 'flex', gap: '20px' }}>
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              type="phone"
              value={formValues.phone}
              onChange={handleInputChange}
              error={!!formErrors.phone}
              helperText={formErrors.phone}
            />
            <TextField
              fullWidth
              label="Address"
              name="address"
              type="text"
              value={formValues.address}
              onChange={handleInputChange}
            />
          </Grid2>
          <Grid2>
            <Button fullWidth type="submit" variant="contained" color="primary">
              Send
            </Button>
          </Grid2>
        </Grid2>
      </form>
    </Box>
  );
}

export default FormComponent;
