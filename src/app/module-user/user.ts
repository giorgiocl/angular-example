export class User {
    name: string;
    password: string;
    email: string;
    firstname: string;
    lastname: string;

    constructor(name: string, password: string, email: string, firstname: string, lastname: string) {
        this.name=name;
        this.password=password;
        this.email=email;
        this.firstname=firstname;
        this.lastname=lastname
     }
}