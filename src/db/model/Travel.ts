import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity()
export class Travel {
  @PrimaryColumn('uuid')
  id: string

  @Column()
  pilotName: string

  @Column()
  copilotName: string

  @Column()
  starshipName: string

  @Column()
  destinationName: string

  @Column()
  originName: string
}