import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'

@Entity('cities')
class City {
  @PrimaryColumn()
  id: number

  @Column()
  name: string

  @Column()
  state_abbreviation: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default City
