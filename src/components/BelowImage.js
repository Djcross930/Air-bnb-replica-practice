import Star from './Star.png'
export default function BelowImage(props) {
  return <div className="BelowImage">
    <img src={Star} alt="Rating" /> <p className="rating"> {props.review} <span className="Grey">(6) USA</span> </p>
    <p className="description">{props.description}</p> <p className="price"><b>From ${props.price}</b>/person</p>
  </div>
}