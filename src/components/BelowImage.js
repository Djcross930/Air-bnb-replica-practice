import Star from './Star.png'

export default function BelowImage() {
  return <div className="BelowImage">
    <img src={Star} alt="Rating" /> <p className="rating"> 5.0 <span className="Grey">(6) USA</span> </p>
    <p className="description">Life lessons with Katie Zaferes</p> <p className="price"><b>From $136</b>/person</p>
  </div>
}