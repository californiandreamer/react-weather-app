import React from 'react';
import cls from './Form.module.css'

const Form = ({onSubmit}) => {
    return (
      <form className={cls.form} onSubmit={onSubmit}>
          <input className={cls.input} type="text" name="city" placeholder="City" />
          <button className={cls.button}>Get weather</button>
      </form>
    )
}

export default Form;