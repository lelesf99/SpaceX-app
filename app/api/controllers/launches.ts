import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from "axios";

interface Launch {
  id: number;
  name: string;
  number: number;
  date: Date;
  img: string;
}

const launchMapper = (apiResLaunch: any): Launch => {
  return {
    id: apiResLaunch.id,
    name: apiResLaunch.name,
    number: apiResLaunch.flight_number,
    date: apiResLaunch.date_local,
    img: apiResLaunch.links.patch.large,
  };
};

const getLaunch = async (req: Request, res: Response, next: NextFunction) => {
  const id: string = req.params.id;
  try {
    let result: AxiosResponse = await axios.get(
      `https://api.spacexdata.com/v5/launches/${id}`
    );
    return res.status(result.status).json(result.data);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getAllLaunches = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let result: AxiosResponse = await axios.get(
      "https://api.spacexdata.com/v5/launches"
    );
    const resMap = result.data.map((launch: any) => launchMapper(launch));
    return res.status(result.status).json(resMap);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getLatestLaunch = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let result: AxiosResponse = await axios.get(
      "https://api.spacexdata.com/v5/launches/latest"
    );
    const resMap = launchMapper(result.data);
    return res.status(result.status).json(resMap);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getNextLaunch = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let result: AxiosResponse = await axios.get(
      "https://api.spacexdata.com/v5/launches/next"
    );
    const resMap = launchMapper(result.data);
    return res.status(result.status).json(resMap);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getUpcomigLaunches = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let result: AxiosResponse = await axios.get(
      "https://api.spacexdata.com/v5/launches/upcoming"
    );
    const resMap = result.data.map((launch: any) => launchMapper(launch));
    return res.status(result.status).json(resMap);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getPastLaunches = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let result: AxiosResponse = await axios.get(
      "https://api.spacexdata.com/v5/launches/past"
    );
    const resMap = result.data.map((launch: any) => launchMapper(launch));
    return res.status(result.status).json(resMap);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default {
  getLaunch,
  getAllLaunches,
  getLatestLaunch,
  getNextLaunch,
  getUpcomigLaunches,
  getPastLaunches,
};
