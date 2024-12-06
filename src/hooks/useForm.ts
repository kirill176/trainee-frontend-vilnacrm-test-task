import { useCallback, useState } from 'react';

import { fetchData, updateData } from '@/services/api';
import { UserType } from '@/types/types';

const useForm = () => {
  const [formValues, setFormValues] = useState<UserType>({
    id: 0,
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const getUser = useCallback(async () => {
    try {
      const response = await fetchData();
      const { id, name, email, phone, address } = response;
      const city = address?.city || '';
      setFormValues({ id, name, email, phone, address: city });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const setUser = useCallback(async () => {
    try {
      await updateData(formValues);
    } catch (error) {
      console.error(error);
    }
  }, [formValues]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  const validateForm = useCallback(() => {
    const errors: typeof formErrors = { name: '', email: '', phone: '' };

    if (!formValues.name) errors.name = 'Name is required.';
    if (!formValues.email) errors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formValues.email)) errors.email = 'Email is not valid.';
    if (!formValues.phone) errors.phone = 'Phone is required.';

    setFormErrors(errors);

    return !Object.values(errors).some((error) => error);
  }, [formValues]);

  return {
    formValues,
    formErrors,
    setFormValues,
    handleInputChange,
    validateForm,
    setUser,
    getUser,
  };
};

export default useForm;
