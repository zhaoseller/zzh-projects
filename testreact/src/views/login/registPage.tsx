
import React, { useState } from "react"
import {registApi} from '@/api/login.ts'
import { useNavigate  } from 'react-router-dom'
import  styled from 'styled-components'

const RegisterContain = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
`


const RegistPage = () => {
    const [formData, setFormData] = useState({
        userName: '',
        password: '',
        password2: '',
        email: ''
    })
    const history = useNavigate ()

    const setValue = (attr: string, e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [attr]: e.target.value
        })
    }
    const sendFormData = async():Promise<void> => {
        const {userName, password, password2, email} = formData
        if (!userName || !password || !password2 || !email) {
            alert('information not integral')
            return
        }
        if(password !== password2) {
            alert('password not the same')
            return
        }
        const res = await registApi({
            userName: userName,
            password: password,
            email: email
        })
        console.log(res)
        if (res.data.code !== 200) {
            alert(res.data.message)
        } else {
            history('/login')
        }
    }
    return(
        <RegisterContain>
            <div>
                <label style={{display: 'inline-block', width: '100px'}}>username</label>
                <input value={formData.userName} onChange={(e) => setValue('userName', e)}></input>
            </div>
            <div style={{marginTop: '10px'}}>
                <label style={{display: 'inline-block', width: '100px'}}>password</label>
                <input value={formData.password} onChange={(e) => setValue('password', e)}></input>
            </div>
            <div style={{marginTop: '10px'}}>
                <label style={{display: 'inline-block', width: '100px'}}>password again</label>
                <input value={formData.password2} onChange={(e) => setValue('password2', e)}></input>
            </div>
            <div style={{marginTop: '10px'}}>
                <label style={{display: 'inline-block', width: '100px'}}>email</label>
                <input value={formData.email} onChange={(e) => setValue('email', e)}></input>
            </div>
            <div style={{marginTop: '10px'}}>
                <button onClick={sendFormData}>regist</button>
            </div>
        </RegisterContain>
    )
}


export default RegistPage