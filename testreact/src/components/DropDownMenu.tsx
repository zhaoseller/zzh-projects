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
  private showMenuFlag = ():void => {
    this.setState(() => ({
      menuFlag: true
    }))
  }
  private closeMenuFlag = ():void => {    
    this.setState(() => ({
      menuFlag: false
    }))
  }
  public render() {
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
        <DropdownMenuContain 
        $paramx={this.props.positionParams.x} 
        $paramy={this.props.positionParams.y} 
        $showFlag={this.props.showFlag || this.state.menuFlag}
        onMouseEnter={this.showMenuFlag}
        onMouseLeave={this.closeMenuFlag}>
            <DropdownBody>
                {
                    Array.isArray(this.props.innerContext) && this.props.innerContext.map((ele, index) => {
                        return (<DropdownSingleItem key={index} onClick={() => this.props.handleChildJump(ele.url)}>{ele.label}</DropdownSingleItem>)
                    })
                }
            </DropdownBody>
        </DropdownMenuContain>
      )
    // return (<div> 
    //   {JSON.stringify(this.props.innerContext)}
    // </div>)
    }
}
