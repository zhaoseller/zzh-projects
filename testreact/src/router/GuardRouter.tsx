import { Component} from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import routes from './index'

interface IProps {
    path: string
}
class GuardRouer extends Component<IProps> {
    constructor(props: IProps) {
        super(props)
    }
    componentDidMount(): void {

    }
    render() {
        const token = localStorage.getItem('token')
        const targetPath = routes.find(el => el.path === this.props.path)
        if (this.props.path === '/') {
            if (token) {
                return <Navigate to={'/home'}></Navigate>
            }
            return <Navigate to={'/login'}></Navigate>
        }
        if (!token && this.props.path !== '/login') {
            return <Navigate to={'/login'}></Navigate>
        } else {
            if (!targetPath) {
                return <Navigate to={'/404'}></Navigate>
            }
            return (
                <Routes>
                    <Route path={targetPath.path} element={targetPath.element}></Route>
                </Routes>
            )
        }
    }
}


export default GuardRouer