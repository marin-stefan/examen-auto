import { UserRoles } from "../../shared/enums/userRolesEnum";

export interface User {
    id: string;
    name: string;
    role: UserRoles;
}