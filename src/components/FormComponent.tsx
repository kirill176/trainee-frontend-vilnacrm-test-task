import { TextField, Button, Box, Grid2 } from '@mui/material';
import React, { memo, useCallback } from 'react';

import useForm from '@/hooks/useForm';

function FormComponent() {
  const {
    formValues,
    formErrors,
    setFormValues,
    handleInputChange,
    validateForm,
    setUser,
    getUser,
  } = useForm();

  const handleFormSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
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
    },
    [validateForm, setUser, setFormValues]
  );

  const handleInputChangeMemo = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      handleInputChange(e);
    },
    [handleInputChange]
  );

  const gridStyle = {
    display: 'flex',
    gap: '20px',
  };

  return (
    <Box sx={{ maxWidth: '800px', m: 'auto', p: '5px', mt: '80px' }}>
      <form onSubmit={handleFormSubmit}>
        <Grid2>
          <Grid2 sx={gridStyle}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              type="text"
              value={formValues.name}
              onChange={handleInputChangeMemo}
              error={!!formErrors.name}
              helperText={formErrors.name}
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formValues.email}
              onChange={handleInputChangeMemo}
              error={!!formErrors.email}
              helperText={formErrors.email}
            />
          </Grid2>
          <Grid2 sx={gridStyle}>
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              type="phone"
              value={formValues.phone}
              onChange={handleInputChangeMemo}
              error={!!formErrors.phone}
              helperText={formErrors.phone}
            />
            <TextField
              fullWidth
              label="Address"
              name="address"
              type="text"
              value={formValues.address}
              onChange={handleInputChangeMemo}
            />
          </Grid2>
          <Grid2>
            <Button fullWidth type="submit" variant="contained" color="primary">
              Send
            </Button>
          </Grid2>
        </Grid2>
      </form>
      <Button variant="contained" color="primary" onClick={getUser} sx={{ mt: '10px' }}>
        fetchData
      </Button>
    </Box>
  );
}

export default memo(FormComponent);
