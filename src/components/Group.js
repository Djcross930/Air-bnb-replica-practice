import BelowImage from './BelowImage.js'

export default function AthleteData(props) {
  console.log(props)
  return <div className="AthleteData">
    <img className="AthletePhoto" src={props.img} alt="Athlete" />
    <BelowImage
<<<<<<< HEAD
      review={props.review}
      reviewCount={props.reviewCount}
      description={props.description}
      price={props.price}
      country={props.country}
=======
      review="5.0"
      description="Life lessons with Katie Zaferes"
      price={136}
>>>>>>> 900682fd9d01f29be12611c51d44317e37db1cf9
    />
  </div>
}