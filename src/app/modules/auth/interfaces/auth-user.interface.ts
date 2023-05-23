import { UserRoles } from "../../shared/enums/userRolesEnum";

export interface AuthUser {
    id: string;
    role: UserRoles;
}