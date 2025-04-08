import { IconLoader2 } from '@tabler/icons-react'
import React from 'react'
import s from './loader.module.scss'

export const Loader = () => {
	return (
		<div className={s.wrapper}>
			<IconLoader2 size={24} className={s.icon}/>
		</div>
	)
}
