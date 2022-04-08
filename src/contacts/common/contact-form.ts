import { useFormik } from 'formik';

import { isEmail } from 'src/common/is-email';

export const useContactForm = (
  onSubmit: (formValues: { email: string; name: string }) => Promise<void>
) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      name: ''
    },

    validateOnBlur: false,
    validateOnChange: false,

    validate: (formValues) => {
      const errors: Partial<typeof formValues> = {};

      if (!formValues.email) {
        errors.email = 'Required';
      }

      if (!formValues.name) {
        errors.name = 'Required';
      }

      if (!isEmail(formValues.email)) {
        errors.email = 'invalid email';
      }

      return errors;
    },

    onSubmit: async (formValues, { resetForm }) => {
      await onSubmit(formValues);

      resetForm();
    }
  });

  return formik;
};
