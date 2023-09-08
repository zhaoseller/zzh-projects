import { Navigate } from "react-router-dom"
import Home from '../views/home/Home.tsx'
import NotFound from '../views/NotFound/index.tsx'
import Login from '../views/login/index.tsx'
import RegistPage from "@/views/login/registPage.tsx"
const routes = [
 {
    path: '/',
    element: <Navigate to="/home"/>,
 },
 {
   path: '/home',
   element: <Home />
 },
 {
   path: '/login',
   element: <Login />,
   single: true
 },
 {
   path: '/register',
   element: <RegistPage />,
   single: true
 },
 {
  path: '/404',
  single: true,
  element: <NotFound />
}
]

export default routes 
export const singlePages = routes.filter(el => el.single)
export const nonePages = routes.filter(el => !el.single)