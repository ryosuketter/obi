import React from 'react'
import TaskInput from './TaskInput'
import { Task } from './Types'

type Props = {
	setTasks: React.Dispatch<React.SetStateAction<Task[]>>
	tasks: Task[]
}

const handleCheckedTaskFilter: React.FC<Props> = ({ setTasks, tasks }) => {
	const handleCheckedTaskFilter = () => {
		const uncheckedTasks = tasks.filter(task => !task.done)
		setTasks(uncheckedTasks)
	}

	return <button onClick={handleCheckedTaskFilter}>チェック済みのタスクを削除</button>
}

export default handleCheckedTaskFilter
