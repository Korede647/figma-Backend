import { Lga, State, User } from "@prisma/client";
import { CreateUserDTO } from "../../dto/createUser.dto";
import { UserService } from "../createUser.service";
import { hashPassword } from "../../utils/password.util";
import { db } from "../../config/db";
import { CustomError } from "../../exceptions/customError.error";

export class UserServiceImpl implements UserService{
    async getAllStates(): Promise<State[] | null> {
        return await db.state.findMany()
    }

    async getAllLGAsByState(id: number): Promise<Lga[]> {
        if (!id) {
            throw new Error("State ID is required");
          }
        const state = await db.state.findUnique({
            where:{
                id: id
            },
            include: {
                lgas: true
            },
        })
        if(!state){
            throw new CustomError(400, "State not found")
        }
        return state.lgas
    }
    async createUser(data: CreateUserDTO): Promise<User> {
        const isUserExist = await db.user.findFirst({
          where: {
            email: data.email,
          },
          include: {
        state: true
        },
        });
    
        if (isUserExist) {
          throw new CustomError(409, "Oops email already taken");
        }
    
        // const user = await db.user.create({
        //   data: {
        //     email: data.email,
        //     password: await hashPassword(data.password),
        //     firstName: data.firstName,
        //     lastName: data.lastName,
        //     role: data.role,
        //     // state: state
        // });
        // return user;
        throw new Error("Method not implemented.");
      }
    getUserById(id: number): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
    getAllUsers(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    updateUser(id: number, data: Partial<CreateUserDTO>): Promise<User> {
        throw new Error("Method not implemented.");
    }
    deleteUser(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}