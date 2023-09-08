import { useState } from "react"
import { useNavigate  } from 'react-router-dom'
import  styled from 'styled-components'
import {getToken} from '@/api/login.ts'

const LoginContain = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
`
const Login = () => {
    const [dataContain, setState] = useState({
        email: '',
        password: '',
    })
    const history = useNavigate ()
    const jumpToCreate = ():void => {
        history('/register')
    }
    const jumpToForgetPassword = ():void => {
        history('/forgetPassword')
    }
    const setValue = (params: string, e: React.ChangeEvent<HTMLInputElement>) => {
        // interface  validateContainType {
        //     [propName:string]: boolean
        // }
        // const validateContain = {
        //     userName: true,
        //     password: true
        // } as validateContainType
        setState({
            ...dataContain, [params]: e.target.value
        })
        // if (!validateContain[params]) {
        //     console.log('参数错误')
        // }
    }
    const login = async():Promise<void> => {
        if(!dataContain.email || !dataContain.password) {
            alert('please input email or password')
        }
        const res = await getToken({
            email: dataContain.email,
            password: dataContain.password,
        })
        if (res.data.code !== 200) {
            alert('wrong password or account')
        } else {
            history('/home')
            localStorage.setItem('token', res.data.token)
        }
    }
    return(
    <LoginContain>
        <div>
            <div style={{}}>
                <label className="label" style={{width: '100px', display: 'inline-block'}}>Username</label>
                <input placeholder="userName" value={dataContain.email} onChange={(e) => setValue('email', e)}></input>
            </div>
            <div style={{marginTop: '10px'}}>
                <label className="label" style={{width: '100px', display: 'inline-block'}}>Password</label>
                <input placeholder="passWord" value={dataContain.password} onChange={(e) => setValue('password', e)}></input>
            </div>
            <div style={{marginTop: '10px'}}>
                <button onClick={login}>登录</button>
            </div>
        </div>
        <div style={{marginTop: '20px'}}>
            <button onClick={jumpToCreate} style={{marginRight: '20px'}}>Create Account</button>
            <button onClick={jumpToForgetPassword}>Forget Passeword</button>
        </div>
    </LoginContain>)
}

export default Login
