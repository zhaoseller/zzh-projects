import { Navigate } from "react-router-dom"
import Home from '../views/home/Home.tsx'
const routes = [
 {
    path: '/',
    element: <Navigate to="/home"/>,
 },
 {
   path: '/shop_by_scent',
   element: <Home />
 }
]

export default routes 