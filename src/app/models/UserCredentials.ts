export class UserCredentials{
    username:string;
    email:string;
    password:string;
    
    constructor(){
        this.email = "";
        this.username = "";
        this.password = "";
    }

    public getUsername():string{
        return this.username;
    }
    public getPassword():string{
        return this.password;
    }
    public getEmail():string{
        return this.email;
    }
    
}