import React, { useState } from "react";
import s from './input.module.scss'
import { useFormContext } from "react-hook-form";
import classNames from "classnames";
import {IconEyeFilled, IconEyeOff} from '@tabler/icons-react'

export const Input = ({ name, placeholder, type = '', className }) => {
	const {register, formState} = useFormContext()
	const [dynamicType, setDynamicType] = useState(type)

  return (
    <div className={classNames(s.wrapper, className)}>
      <input
        placeholder={placeholder}
				type={dynamicType}
        {...register(name)}
        className={classNames(
          s.input,
          formState?.errors[name]?.message ? s.error : ""
        )}
      />
			{type === 'password' && <button className={s.hiddenBtn}
			 onClick={() => {
				setDynamicType(prev => {
					if(prev === 'password'){
						return ''
					}else{
						return 'password'
					}
				})
			}}>
				{dynamicType === 'password' ? <IconEyeFilled size={16}/> : <IconEyeOff size={16}/>}
			</button>}
      <span className={s.error}>{formState?.errors[name]?.message}</span>
    </div>
  );
};
