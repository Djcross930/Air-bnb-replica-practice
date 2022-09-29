import BelowImage from './BelowImage.js'

export default function AthleteData(props) {
  console.log(props)
  return <div className="AthleteData">
    <img className="AthletePhoto" src={props.img} alt="Athlete" />
    <BelowImage
      review="5.0"
      description="Life lessons with Katie Zaferes"
      price={136}
    />
  </div>
}