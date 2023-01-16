import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({name:"stations", synchronize: false})
export class Stations {

    @Column()
    fid: number

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nimi: string

    @Column()
    namn: string

    @Column()
    name: string

    @Column()
    osoite: string

    @Column()
    adress: string

    @Column()
    kaupunki: string
    
    @Column()
    stad: string
    
    @Column()
    operaattor: string
    
    @Column()
    kapasiteet: string
    
    @Column("float")
    x: number
    
    @Column("float")
    y: number

}