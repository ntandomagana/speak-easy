export interface BookingPayload {
  teacherId: string;
  studentId: string;
  lessonType: string;
  level: string;
  lessonDateTime: string;
  time?: string; 
  date?: string
  // cancelled: boolean;
}
