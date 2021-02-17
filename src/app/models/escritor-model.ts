import { Historia } from "./historia-model";

export class Escritor {
    public id:       string;
    public username: string;
    public email:    string;
    public about:    string;
    public imageURL: string;
    public numHist: number;
    public historias: [any] | [];

    constructor(){
        this.id       = "";
        this.username = "";
        this.email    = "";
        this.about    = "";
        this.imageURL = "";
        this.numHist = 0;
        this.historias = [];
    }

    public getHistorias(): [any] | [] {
        return this.historias;
    }

    public setHistorias(historias: [any] | []): void {
        this.historias = historias;
    }


    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public getUsername(): string {
        return this.username;
    }

    public setUsername(username: string): void {
        this.username = username;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getAbout(): string {
        return this.about;
    }

    public setAbout(about: string): void {
        this.about = about;
    }

    public getImageURL(): string {
        return this.imageURL;
    }

    public setImageURL(imageURL: string): void {
        this.imageURL = imageURL;
    }

    public getNumHist(): number {
        return this.numHist;
    }

    public setNumHist(numHist: number): void {
        this.numHist = numHist;
    }

    
}