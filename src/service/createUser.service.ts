import { Lga, State, User } from '@prisma/client'
import { CreateUserDTO } from '../dto/createUser.dto'
// import { ChangePasswordDTO } from '../dto/resetPassword.dto';

export interface UserService {
    createUser(data: CreateUserDTO): Promise<User>;
    getUserById(id: number): Promise<User | null>;
    getAllUsers(): Promise<User[]>;
    updateUser(id: number, data: Partial<CreateUserDTO>): Promise<User>;
    deleteUser(id: number): Promise<void>;
    getAllStates(): Promise<State[] | null>
    getAllLGAsByState(id: number): Promise<Lga[]>
    // profile(id: number): Promise<Omit<User, "password">>
    // setPassword(id: number, data: ChangePasswordDTO): Promise<void>
    // updateProfilePic(id: number, data: { profilePic: string }): Promise<Object | any>;
}