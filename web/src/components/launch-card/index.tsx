import "./style.css";
export default function LaunchCard(props: any) {
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
          <p>{props.loading ? <span className="loading"></span> : props.launch?.name}</p>
          <p>Lançamento nº {props.launch?.number}</p>
          <p>{props.loading ? <span className="loading"></span> : new Date(props.launch?.date).toLocaleDateString()}</p>
        </div>
        <div className="card-footer">
          {props.loading ? <span className="loading"></span> : <a href={`launch/${props.launch?.id}`}>Saber mais</a>}
        </div>
      </div>
    </div>
  );
}
