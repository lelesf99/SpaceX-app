import "./style.css";
export default function LaunchCard(props: any) {
  return !props.loading ? (
    <></>
  ) : (
    <div className="launch-card">
      <div className="card-hero">
        <img src={props.launch?.img} alt="" />
      </div>
      <div className="card-content">
        <div className="card-header">{props.header}</div>
        <div className="card-body">
          <p>{props.launch?.name}</p>
          <p>Lançamento nº {props.launch?.number}</p>
          <p>{new Date(props.launch?.date).toLocaleDateString()}</p>
        </div>
        <div className="card-footer">
          <a href={`launch/${props.launch?.id}`}>Saber mais</a>
        </div>
      </div>
    </div>
  );
}
