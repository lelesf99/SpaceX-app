import React from "react";
import { useEffect, useState } from "react";
import LaunchCard from "../../components/launch-card";
import LaunchList from "../../components/launch-list";
import Launch from "../../models/Launch";
import "./style.css";
export default function Home() {
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
  const [upcoming, setUpcoming] = useState<Launch>();
  const [past, setPast] = useState<Launch>();

  useEffect(() => {
    setLatestLoading(true);
    setNextLoading(true);
    setUpcomingLoading(true);
    setPastLoading(true);

    fetch("http://localhost:3001/latest")
      .then((res) => res.json())
      .then(
        (result) => {
          setLatestLoading(true);
          setLatest(result);
        },
        (error) => {
          setLatestLoading(true);
          setLatestError(error);
        }
      );
    fetch("http://localhost:3001/next")
      .then((res) => res.json())
      .then(
        (result) => {
          setNextLoading(true);
          setNext(result);
        },
        (error) => {
          setNextLoading(true);
          setNextError(error);
        }
      );
    fetch("http://localhost:3001/upcoming")
      .then((res) => res.json())
      .then(
        (result) => {
          setUpcomingLoading(true);
          setUpcoming(result);
        },
        (error) => {
          setUpcomingLoading(true);
          setUpcomingError(error);
        }
      );
    fetch("http://localhost:3001/past")
      .then((res) => res.json())
      .then(
        (result) => {
          setPastLoading(true);
          setPast(result);
        },
        (error) => {
          setPastLoading(true);
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
          list={upcoming}
          header="Próximos Lançamentos"
          loading={upcomingLoading}
          error={upcomingError}
        ></LaunchList>
        <LaunchList
          list={past}
          header="Últimos Lançamentos"
          loading={pastLoading}
          error={pastError}
        ></LaunchList>
      </div>
    </div>
  );
}
