export class Employee {

    private id: number;
    private first_name: string;
    private last_name: string;
    private email: string;


    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getFirst_name(): string {
        return this.first_name;
    }

    public setFirst_name(first_name: string): void {
        this.first_name = first_name;
    }

    public getLast_name(): string {
        return this.last_name;
    }

    public setLast_name(last_name: string): void {
        this.last_name = last_name;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public afficheToi(): void {
        
        console.log(this.getId() + "\n" + this.getFirst_name() + "\n" + this.getLast_name() + "\n" + this.getEmail());

    }
    
}
