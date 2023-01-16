import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({name:"trips", synchronize: false})
export class Trips {

    @Column("datetime")
    departure: Date

    @Column("datetime")
    arrival: Date

    @PrimaryGeneratedColumn()
    departurestationID: number

    @Column()
    departurestation: string

    @Column()
    returnstationID: number

    @Column()
    returnstation: string

    @Column()
    distance: number

    @Column()
    duration: number

}