import Star from './Star.png'
export default function BelowImage(props) {
  return <div className="BelowImage">
<<<<<<< HEAD
    <img src={Star} alt="Rating" /> <p className="rating"> {props.review} <span className="Grey">({props.reviewCount}) USA</span> </p>
=======
    <img src={Star} alt="Rating" /> <p className="rating"> {props.review} <span className="Grey">(6) USA</span> </p>
>>>>>>> 900682fd9d01f29be12611c51d44317e37db1cf9
    <p className="description">{props.description}</p> <p className="price"><b>From ${props.price}</b>/person</p>
  </div>
}