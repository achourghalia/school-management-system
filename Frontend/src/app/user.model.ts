export class User {
    id: number = 0;
    parentname: string = '';
    studentname: string = '';
    dateNaissance: Date = new Date();
    email: string = '';
    password: string = '';
    phone: number = 0;
    gender: string = '';
    class: string = '';
    adress: string = '';
    isactive: boolean = false;
    role: string = 'user';
}
