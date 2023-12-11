
import "../adminpaneldashboard.css"
function Box({bg , info , text}) {
    return ( 
        <div className="minibox2" style={{background: `linear-gradient(90deg,${bg[0]} , ${bg[1]})`}}>
            <span className="money">
                {info}
            </span>
            <span className="moneytext">
                {text}
            </span>
        </div> );
}

export default Box;