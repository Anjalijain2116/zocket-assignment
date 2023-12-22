import Card from "./Card1";

// import image from "../icons/page3.png"

const Cards =(props)=>{
    return (
        <div className="cards">
            <span className="cards_head">{props.heading}</span>
            <span className="cards_head2">{props.subheading}</span>
            <div className="card_border"></div>

            <div className="cards_div">
                <Card line1={props.line1} line2={props.line2} image={props.image} tick1={props.tick1} uncheck={props.uncheck}/>
                <Card line1={props.line1} line2={props.line2} image={props.image} tick2={props.tick2} uncheck={props.uncheck}/>
                <Card line1={props.line1} line2={props.line2} image={props.image} uncheck={props.uncheck}/>
                <Card line1={props.line1} line2={props.line2} image={props.image} uncheck={props.uncheck}/>
                <Card line1={props.line1} line2={props.line2} image={props.image} uncheck={props.uncheck}/>
                <Card line1={props.line1} line2={props.line2} image={props.image} uncheck={props.uncheck}/>
                <Card line1={props.line1} line2={props.line2} image={props.image} uncheck={props.uncheck}/>
                <Card line1={props.line1} line2={props.line2} image={props.image} uncheck={props.uncheck}/>
                <Card line1={props.line1} line2={props.line2} image={props.image} uncheck={props.uncheck}/>
            </div>
        </div>
    )
}
export default Cards;