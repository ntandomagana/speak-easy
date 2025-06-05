export interface AuthPayload {
    name: string;
    email: string; 
    password: string;
    role: 'STUDENT' | 'TEACHER' | 'ADMIN'; 
}
