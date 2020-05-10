import React from 'react';
import cx from 'classnames';

import styles from './FormField.module.scss';

const FormField = ({ field, onChange }) => {
  const { label, errorMsg, touched, valid, validatorFn, defaultValue, ...attributes } = field;

  const constructField = () => {
    const classes = cx(styles.Field, { [styles.valid]: valid, [styles.invalid]: touched && !valid });

    if (attributes.type === 'select') {
      return (
        <select {...attributes} className={classes} onChange={onChange}>
          <option value={defaultValue} disabled>
            -- выберите один из вариантов --
          </option>
          {field.options.map((el) => (
            <option key={el.name} name={el.name}>
              {el.label}
            </option>
          ))}
        </select>
      );
    } else {
      return <input className={classes} onChange={onChange} {...attributes} />;
    }
  };

  return (
    <div className={styles.FormField}>
      <label className={styles.Label}>{label}</label>
      {constructField()}
      {touched && !valid ? <span className={styles.ErrorMsg}>{errorMsg}</span> : null}
    </div>
  );
};

export default React.memo(FormField);
