import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from 'axios';

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
        img: apiResLaunch.links.patch.large
    }
}

const getLaunch = async (req: Request, res: Response, next: NextFunction) => {
    const id: string = req.params.id;
    let result: AxiosResponse = await axios.get(`https://api.spacexdata.com/v5/launches/${id}`);
    const resMap = launchMapper(result.data);
    return res.status(result.status).json(resMap);
}

const getAllLaunches = async (req: Request, res: Response, next: NextFunction) => {
    let result: AxiosResponse = await axios.get('https://api.spacexdata.com/v5/launches');
    const resMap = result.data.map((launch: any) => launchMapper(launch))
    return res.status(result.status).json(resMap);
}


const getLatestLaunch = async (req: Request, res: Response, next: NextFunction) => {
    let result: AxiosResponse = await axios.get('https://api.spacexdata.com/v5/launches/latest');
    const resMap = launchMapper(result.data);
    return res.status(result.status).json(resMap);
}

const getNextLaunch = async (req: Request, res: Response, next: NextFunction) => {
    let result: AxiosResponse = await axios.get('https://api.spacexdata.com/v5/launches/next');
    const resMap = launchMapper(result.data);
    return res.status(result.status).json(resMap);
}

const getUpcomigLaunches = async (req: Request, res: Response, next: NextFunction) => {
    let result: AxiosResponse = await axios.get('https://api.spacexdata.com/v5/launches/upcoming');
    const resMap = result.data.map((launch: any) => launchMapper(launch))
    return res.status(result.status).json(resMap);
}

const getPastLaunches = async (req: Request, res: Response, next: NextFunction) => {
    let result: AxiosResponse = await axios.get('https://api.spacexdata.com/v5/launches/past');
    const resMap = result.data.map((launch: any) => launchMapper(launch))
    return res.status(result.status).json(resMap);
}

export default { getLaunch, getAllLaunches, getLatestLaunch, getNextLaunch, getUpcomigLaunches, getPastLaunches }