import React, {ChangeEvent, useState,KeyboardEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string | null>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {//проверка имени
        let checkName = e.currentTarget.value.trim()
        if (checkName) {
            setName(checkName)
            setError(null)
        } else {
            setName('')
            setError('Incorrect Name')
        }
    }

    const addUser = () => {
        if (name) {
            alert(`Hello ${name}!`) // need to fix
            addUserCallback(name)
            setName('')
        }
    }

    const AddUserEnter = (e:KeyboardEvent<HTMLInputElement>) => {
        if(e.key ==='Enter' && name){
            addUser()
        }
    }

    const totalUsers = users.length // need to fix

    return (  //добавить ввод на интер
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUserEnter={AddUserEnter}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
