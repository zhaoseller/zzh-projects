import { useNavigate } from 'react-router-dom';
import DropDownMenu from '@/components/DropDownMenu.tsx'
import React, {useState} from "react";
import menuTotal from './MenuLists'

const Header = () => {
    const navigate = useNavigate();
  
    type menuType = {
      url: string;
      name: string;
    }
    const menuItem: menuType[] = [
      {name:'SHOP BY SCENT', url: 'shop_by_scent' },
      {name:'SHOP BY PRODUCT', url: 'shop_by_product' },
      {name:'ABOUT', url: 'about' },
      {name:'STORE', url: 'store' },
      {name:'WHOLESALE', url: 'wholesale' },
    ]
    const handleMenuClick =  (url: string) =>() => {
      navigate(`/${url}`)
    }
    interface positionParamsType {
      x: number,
      y: number,
    }
    const [positionParams, setObj]= useState<positionParamsType>({
      x: 0,
      y: 0
    })
    const [showFlag, setflag] = useState(false)
    const [innerContext, setinnerContext] = useState([])
    const closeSubMenu = () => {
      setflag(false)
    }
    const openSubMenu = (name: string, e: React.MouseEvent<HTMLDivElement>) => {
      const box: HTMLDivElement = e.currentTarget;
      setflag(true)
      setObj({
        x: box.offsetLeft,
        y: box.offsetTop
      })
      setinnerContext(menuTotal[name])
    }
    const handleChildJump = (url:string):void => {
      navigate(url)
    } 
    return (
        <div>
            <div className='brand'>BUBAILAN</div>
            <div className='menuContainer'>
                {menuItem.map(el => {
                return(
                <div key={el.name} onClick={handleMenuClick(el.url)} className='subMenu' onMouseOver={(e) => openSubMenu(el.name, e)} onMouseLeave={closeSubMenu}>
                    <span>{el.name}</span>
                </div>
                )
            })}
            </div>
            <DropDownMenu 
            showFlag={showFlag}
            innerContext={innerContext}
            positionParams={positionParams}
            handleChildJump={handleChildJump}
            />
      </div>
    )
}
export default Header