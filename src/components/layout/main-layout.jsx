import React from 'react'
import { Outlet } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext'
import { Button } from '../shared/button/button'
import s from './main-layout.module.scss'
import { auth } from '../../api/firebase'
import { signOut } from 'firebase/auth'

export const MainLayout = () => {
	const { user } = useAuthContext()

	return (
		<div>
			<header className={s.header}>
				{user ? <>
				{user.email}
				<Button onClick={() => signOut(auth)}>Logout</Button>
				</> : <Button to="./login">Login</Button>}
			</header>
			<Outlet/>
		</div>
	)
}
