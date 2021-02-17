export class Historia {
    public id:          string;
    public titulo:      string;
    public narrativa:   string;
    public genero:      string;
    public createdAt:   Date;
    public updatedAt:   Date;
    public sinopsis:    string;
    public contenido:   string;
    public status:      boolean;
    public fk_escritor: string;

    constructor(){
        this.id =         "";
        this.titulo =     "";
        this.narrativa =  "";
        this.genero =     "";
        this.createdAt =  new Date;
        this.updatedAt =  new Date;
        this.sinopsis =   "";
        this.contenido =  "";
        this.status =      false;
        this.fk_escritor="";
    }

    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    public getNarrativa(): string {
        return this.narrativa;
    }

    public setNarrativa(narrativa: string): void {
        this.narrativa = narrativa;
    }

    public getGenero(): string {
        return this.genero;
    }

    public setGenero(genero: string): void {
        this.genero = genero;
    }

    public getCreatedAt(): Date {
        return this.createdAt;
    }

    public setCreatedAt(createdAt: Date): void {
        this.createdAt = createdAt;
    }

    public getUpdatedAt(): Date {
        return this.updatedAt;
    }

    public setUpdatedAt(updatedAt: Date): void {
        this.updatedAt = updatedAt;
    }

    public getSinopsis(): string {
        return this.sinopsis;
    }

    public setSinopsis(sinopsis: string): void {
        this.sinopsis = sinopsis;
    }

    public getContenido(): string {
        return this.contenido;
    }

    public setContenido(contenido: string): void {
        this.contenido = contenido;
    }

    public isStatus(): boolean {
        return this.status;
    }

    public setStatus(status: boolean): void {
        this.status = status;
    }

    public getFk_escritor(): string {
        return this.fk_escritor;
    }

    public setFk_escritor(fk_escritor: string): void {
        this.fk_escritor = fk_escritor;
    }

}