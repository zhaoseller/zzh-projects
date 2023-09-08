import {useState} from "react";

const Home = () => {
    const [text, changeText] = useState('我你爹')
    const ChangeTest = (text:string) => {
        changeText(text)
    }
    return(<div className="test" style={{height:'10px'}}>
        <button className="buttonTest" 
            onMouseOver ={() =>ChangeTest('我你爷')} 
            onMouseLeave ={() =>ChangeTest('我你爹')}>
            <div className="shadowText">{'我你爷'}</div>
            <div className="textContan">{text}</div>
            <div className="buttonTopBorder"></div>
            <div className="buttonBottomBorder"></div>
            <div className="buttonLeftBorder"></div>
            <div className="buttonRightBorder"></div>
        </button>
        <div className="changeText">
            这是一段会动的奇怪文字，非常好用，abcdefghijklmnopkqrstuvwxyz
        </div>
        <button className="blinkButton">
            <span>亮闪闪</span>
        </button>
    </div>)
} 

export default Home