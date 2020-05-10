import React, { useState, useCallback } from 'react';

import styles from './BannerForm.module.scss';
import formConfig from '../../formConfig';
import FormField from '../FormField/FormField';

const BannerForm = React.forwardRef(({ addBanner, handleHashChange, formId }, ref) => {
  const [fields, setFields] = useState(
    formConfig.fields.map((el) => ({
      ...el,
      value: el.defaultValue,
      touched: false,
      valid: false,
    })),
  );

  const constructBanner = () =>
    fields.reduce((acc, el) => {
      acc[el.name] = el.value;
      return acc;
    }, {});

  const handleSubmit = (e) => {
    e.preventDefault();
    handleHashChange();
    addBanner(constructBanner());
  };

  const isFormValid = () => fields.reduce((acc, el) => acc && el.valid, true);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    setFields((prevFields) =>
      prevFields.map((el) => {
        if (el.name === name) {
          return { ...el, value, touched: true, valid: el.validatorFn(value) };
        } else {
          return el;
        }
      }),
    );
  }, []);

  return (
    <form ref={ref} className={styles.BannerForm} onSubmit={handleSubmit} id={formId}>
      {fields.map((el) => (
        <FormField key={el.name} field={el} onChange={handleChange} />
      ))}
      <button disabled={!isFormValid()} className={styles.Button}>
        {formConfig.config.buttonText}
      </button>
    </form>
  );
});

export default BannerForm;
