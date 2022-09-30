import BelowImage from './BelowImage.js'

export default function AthleteData(props) {
  console.log(props)
  return <div className="AthleteData">
    <img className="AthletePhoto" src={props.img} alt="Athlete" />
    <BelowImage
      review={props.review}
      reviewCount={props.reviewCount}
      description={props.description}
      price={props.price}
      country={props.country}
    />
  </div>
}