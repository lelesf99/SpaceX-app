import Launch from "../../models/Launch";
import "./style.css";
export default function LaunchList(props: any) {
  return (
    <div className="list-card">
      <h5 className="card-header">{props.header}</h5>
      <div className="list">
        {props.list?.map((launch: Launch, key:number) => (
          <a key={key} href={"launch/" + launch.id} className="list-item">
            <span>{launch.number}</span>
            <span>{launch.name}</span>
            <span>{new Date(launch.date).toLocaleDateString()}</span>
          </a>
        ))}
      </div>
    </div>
  );
}