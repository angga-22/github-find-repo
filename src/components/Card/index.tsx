import { CardProps } from "../../models/git-repo"
import './style.css'
const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="card-wrapper">
      <div className="card-header">
        <img width="50" src={data.owner.avatar_url} alt={data.name} />
        <h4>{data.name}</h4>
      </div>
      <div className="card-body">
        <p>{data.full_name}</p>
        <p><strong>Description:</strong> {data.description}</p>
        <p><strong>Forks:</strong> {data.forks}</p>
      </div>
      <div className="card-footer">
        <a className="url" href={data.html_url}>Visit Github Profile</a>
      </div>
    </div>
  )
}
export default Card
