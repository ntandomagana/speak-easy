export interface StudentProfileData {
    id: string;
    name: string;
    email: string;
    level: string;
    location: string;
    languages: string;
    interests: string[];
    profileImageUrl?: string;
}