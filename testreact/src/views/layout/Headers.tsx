import { useNavigate } from 'react-router-dom';
import DropDownMenu from '@/components/DropDownMenu.tsx'
import React, { useState} from "react";
import menuTotal from './MenuLists'
import  styled from 'styled-components'

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
    const [innerContext, setinnerContext] = useState<{
      label: string,
      url: string}[]>([])
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
    const [menuFlag, showMenuFlag] = useState(false)
  interface DropdownMenuContainProps {
    $paramx: number,
    $paramy: number,
    $showFlag: boolean,
  }
  const DropdownMenuContain = styled.div<DropdownMenuContainProps>`
      display: ${(props) => (!props.$showFlag ? 'none' : 'initial')};
      position: absolute;
      z-index: 999;
      left: ${props => props.$paramx}px;
      top: ${props => props.$paramy + 12.8}px;
      `
    return (
        <div>
            <div className='brand'>BUBAILAN</div>
            <div className='menuContainer'>
                {menuItem.map(el => {
                return(
                <div key={el.name} 
                onClick={handleMenuClick(el.url)} 
                className='subMenu' 
                onMouseEnter={(e) => openSubMenu(el.name, e)} 
                onMouseLeave={closeSubMenu}>
                    <span>{el.name}</span>
                </div>
                )
            })}
            </div>
            <DropdownMenuContain
              $paramx={positionParams.x}
              $paramy={positionParams.y}
              $showFlag={showFlag || menuFlag}
              onMouseEnter={() => showMenuFlag(true)}
              onMouseLeave={() => showMenuFlag(false)}
            >
                <DropDownMenu 
                showFlag={showFlag}
                innerContext={innerContext}
                positionParams={positionParams}
                handleChildJump={handleChildJump}
                />
            </DropdownMenuContain>
      </div>
    )
}
export default Header