import { useEffect, useState } from "react";
import './style.css';

export default function CountDown(props: any) {
  const [counter, setCounter] = useState<string[]>([""]);

  useEffect(() => {
    let interval = setInterval(() => {
      const then = new Date(props?.then).getTime();
      const now = new Date().getTime();

      const delta = then - now;

      var days = Math.floor(delta / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((delta % (1000 * 60)) / 1000);

      setCounter([
        `${days} dia${days === 1 ? "" : "s"}`,
        `${hours} hora${hours === 1 ? "" : "s"}`,
        `${minutes} minuto${minutes === 1 ? "" : "s"}`,
        `${seconds} segundo${seconds === 1 ? "" : "s"}`,
        `Para o lançamento`
      ]);
    });

    return () => {
      clearInterval(interval);
    };
  }, [counter, props.then]);
  return(
    <div className="countdown">
        {counter.map((line, key) => <h1 key={key}>{line}</h1>)}
    </div>
  );
}
