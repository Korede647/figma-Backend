import { Request, Response, NextFunction } from "express";
import { UserServiceImpl } from "../service/implementation/user.service.impl";

export class UserController{
    private userService: UserServiceImpl;

    constructor() {
        this.userService = new UserServiceImpl();
    }


    public getAllStates = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        try{
            const states = await this.userService.getAllStates()
            res.status(201).json(states)
        }catch(error){
            next(error)
        }
    }

    public getAllLgasByState = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        try{
            const state = await parseInt(req.params.id)
            const LGAByState = await this.userService.getAllLGAsByState(state)
            res.status(201).json(LGAByState)
        }catch(error){
            next(error)
        }
    }
}