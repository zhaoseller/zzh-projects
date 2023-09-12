import {Component} from 'react'
import  styled from 'styled-components'
interface singleDropDownMenu {
  label: string,
  url: string 
}
interface positionParams {
  x: number,
  y: number 
}

interface propsI {
  innerContext: singleDropDownMenu[],
  showFlag: boolean,
  positionParams: positionParams,
  handleChildJump: (url:string) => void,
}

interface stateI {
  message: number,
  menuFlag: boolean
}

export default class DropDownMenu extends Component<propsI, stateI> {
  constructor(props: propsI) {
    super(props)  
    this.state = {
      message: 1,
      menuFlag: false
    };
  }
  public render() {
    const DropdownBody = styled.ul`
        columns: 2;
        background: white;
        border-radius: 5px;
        padding: 10px;
        opacity: 0.8;
        margin-top:10px;
        border-spacing: 3px;
        `
    const DropdownSingleItem = styled.li`
        &:hover {
          color: violet;
          cursor: pointer;
        }
    `
    return (
        <DropdownBody>
            {
                Array.isArray(this.props.innerContext) && this.props.innerContext.map((ele, index) => {
                    return (<DropdownSingleItem key={index} onClick={() => this.props.handleChildJump(ele.url)}>{ele.label}</DropdownSingleItem>)
                })
            }
        </DropdownBody>
      )
    // return (<div> 
    //   {JSON.stringify(this.props.innerContext)}
    // </div>)
    }
}
