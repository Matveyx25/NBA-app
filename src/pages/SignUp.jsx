import { createUserWithEmailAndPassword, updateCurrentUser, updateProfile } from 'firebase/auth'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { auth } from '../api/firebase'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import s from './SignUp.module.scss'
import classNames from 'classnames';
import { Button } from '../components/shared/button/button';
import { Input } from '../components/shared/input/input';

export const SignUp = () => {
	const validateScheme = yup.object().shape({
		email: yup.string().required('Поле обязательное').email('Email введен неверно'),
		username: yup.string().required('Поле обязательное').min(2, 'Минимум 2 символа'),
		password: yup.string().required('Поле обязательное').min(6, 'Минимум 6 символов'),
	}).required()

	const methods = useForm({
		defaultValues: {
			email: '',
			password: '',
			username: ''
		},
		resolver: yupResolver(validateScheme)
	})

	const { handleSubmit } = methods

	const onSubmit = handleSubmit((values) => {
		createUserWithEmailAndPassword(auth, values.email, values.password).then((credentials) => {
			updateProfile(credentials.user, {displayName: values.username})
		})
	})

	return (
		<div>
			<FormProvider {...methods}>
				<div className={s.form}>
					<Input name={'email'} placeholder={'email'} type='email'/>
					<Input name={'username'} placeholder={'username'}/>
					<Input name={'password'} placeholder={'password'} type='password'/>
					<Button onClick={onSubmit} label={'submit'}/>
				</div>
			</FormProvider>
		</div>
	)
}
