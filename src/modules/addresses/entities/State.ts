import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'

@Entity('states')
class State {
  @PrimaryColumn()
  id: number

  @Column()
  name: string

  @Column()
  abbreviation: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default State
