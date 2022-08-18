import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CountDown from "../../components/count-down/CountDown";
import "./style.css";

export default function LaunchPage() {
  let { id } = useParams();

  const [launch, setLaunch] = useState<any>();
  
  useEffect(() => {
    fetch(`https://leles-spacex-app.herokuapp.com/launches/${id}`).then((res) =>
      res.json().then((value) => {
        setLaunch(value);
      })
    );
  }, [id]);

  return (
    <div className="launch-page">
      <h1 className="launch-name">{launch?.name}</h1>
      <p>
        {`Lançamento ${launch?.upcoming ? "ocorrerá" : "ocorreu"} às ${new Date(launch?.date_local).toLocaleTimeString()} do dia ${new Date(launch?.date_local).toLocaleDateString()}`}
      </p>
      {launch?.upcoming ? (
        <CountDown then={launch.date_local}></CountDown>
      ) : (
        ""
      )}
      {launch?.links.youtube_id ? (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${launch?.links.youtube_id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        ""
      )}
    <Link to="../" className="back-btn">Voltar</Link>
    </div>
  );
}
