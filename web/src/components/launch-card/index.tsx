import { FC } from "react";
import Launch from "../../models/Launch";
import "./style.css";

interface LaunchCardProps {
  header: string;
  error?: boolean;
  loading?: boolean;
  launch?: Launch;
}

const LaunchCard:FC<LaunchCardProps> = (props) => {
  return props.error ? (
    <div className="launch-card">
      <h1 className="error">Algo deu errado!</h1>
    </div>
  ) : (
    <div className="launch-card">

      {props.loading ? <span className="loading"></span> : <div className="card-hero"><img src={props.launch?.img} alt="" /></div>}

      <div className="card-content">
        <div className="card-header">{props.loading ? <span className="loading"></span> : props.header}</div>
        <div className="card-body">
          <p><strong>Nome</strong>: {props.loading ? <span className="loading"></span> : props.launch?.name}</p>
          <p><strong>Nº</strong> :{props.launch?.number}</p>
          <p><strong>Data</strong> :{props.loading ? <span className="loading"></span> : props.launch ? new Date(props.launch?.date).toLocaleDateString() : new Date().toLocaleDateString()}</p>
        </div>
        <div className="card-footer">
          {props.loading ? <span className="loading"></span> : <a href={`launch/${props.launch?.id}`}>Saber mais</a>}
        </div>
      </div>
    </div>
  );
}
export default LaunchCard;