import { createUserWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { auth } from '../api/firebase'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import s from './SignUp.module.scss'
import classNames from 'classnames';
import { Button } from '../components/shared/button/button';

export const SignUp = () => {
	const validateScheme = yup.object().shape({
		email: yup.string().required('Поле обязательное').email('Email введен неверно'),
		password: yup.string().required('Поле обязательное').min(6, 'Минимум 6 символов'),
	}).required()

	const methods = useForm({
		defaultValues: {
			email: '',
			password: ''
		},
		resolver: yupResolver(validateScheme)
	})

	const {register, handleSubmit, formState} = methods

	const onSubmit = handleSubmit((values) => {
		createUserWithEmailAndPassword(auth, values.email, values.password)
	})

	return (
		<div>
			<FormProvider {...methods}>
				<div className={s.form}>
					<input {...register('email')} className={classNames(s.input, formState?.errors?.email?.message ? s.error : '')}/>
					<span className={s.error}>
						{formState?.errors?.email?.message}
					</span>
					<input {...register('password')} type='password' className={classNames(s.input, formState?.errors?.password?.message ? s.error : '')}/>
					<span className={s.error}>
						{formState?.errors?.password?.message}
					</span>
					<Button onClick={onSubmit} label={'submit'}/>
				</div>
			</FormProvider>
		</div>
	)
}
