import Athlete from './Athlete.png'
import BelowImage from './BelowImage.js'

export default function AthleteData() {
  return <div className="AthleteData">
    <img className="AthletePhoto" src={Athlete} alt="Athlete" />
    <BelowImage />
  </div>
}