export interface UserModel {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    totalExams: number;
    totalPassedExams: number;
    correctanswers: number;
    wrongAnswers: number;

}