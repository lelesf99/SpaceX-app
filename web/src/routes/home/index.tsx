import { FC, useEffect, useState } from "react";
import LaunchCard from "../../components/launch-card";
import LaunchList from "../../components/launch-list";
import Launch from "../../models/Launch";
import "./style.css";

const Home:FC = () => {
  const [latestLoading, setLatestLoading] = useState(false);
  const [nextLoading, setNextLoading] = useState(false);
  const [upcomingLoading, setUpcomingLoading] = useState(false);
  const [pastLoading, setPastLoading] = useState(false);

  const [latestError, setLatestError] = useState(false);
  const [nextError, setNextError] = useState(false);
  const [upcomingError, setUpcomingError] = useState(false);
  const [pastError, setPastError] = useState(false);

  const [latest, setLatest] = useState<Launch>();
  const [next, setNext] = useState<Launch>();
  const [upcoming, setUpcoming] = useState<Launch[]>();
  const [past, setPast] = useState<Launch[]>();

  useEffect(() => {
    setLatestLoading(true);
    setNextLoading(true);
    setUpcomingLoading(true);
    setPastLoading(true);
    fetch("https://leles-spacex-app.herokuapp.com/latest")
      .then((res) => res.json())
      .then(
        (result) => {
          setLatestLoading(false);
          setLatest(result);
        },
        (error) => {
          setLatestLoading(false);
          setLatestError(error);
        }
      );
    fetch("https://leles-spacex-app.herokuapp.com/next")
      .then((res) => res.json())
      .then(
        (result) => {
          setNextLoading(false);
          setNext(result);
        },
        (error) => {
          setNextLoading(false);
          setNextError(error);
        }
      );
    fetch("https://leles-spacex-app.herokuapp.com/upcoming")
      .then((res) => res.json())
      .then(
        (result) => {
          setUpcomingLoading(false);
          setUpcoming(result);
        },
        (error) => {
          setUpcomingLoading(false);
          setUpcomingError(error);
        }
      );
    fetch("https://leles-spacex-app.herokuapp.com/past")
      .then((res) => res.json())
      .then(
        (result) => {
          setPastLoading(false);
          setPast(result);
        },
        (error) => {
          setPastLoading(false);
          setPastError(error);
        }
      );
  }, []);
  return (
    <div className="home-page">
      <h1 className="title">SpaceX Launches</h1>
      <div className="card-container">
        <LaunchCard
          launch={latest}
          header="Último Lançamento"
          loading={latestLoading}
          error={latestError}
        ></LaunchCard>
        <LaunchCard
          launch={next}
          header="Próximo Lançamento"
          loading={nextLoading}
          error={nextError}
        ></LaunchCard>
        <LaunchList
          launchlist={upcoming}
          header="Próximos Lançamentos"
          loading={upcomingLoading}
          error={upcomingError}
        ></LaunchList>
        <LaunchList
          launchlist={past}
          header="Últimos Lançamentos"
          loading={pastLoading}
          error={pastError}
        ></LaunchList>
      </div>
    </div>
  );
}
export default Home;