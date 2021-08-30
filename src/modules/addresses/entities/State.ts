import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'

@Entity('states')
class State {
  @PrimaryColumn()
  id: number

  @Column()
  name: string

  @Column()
  abbreviation: string

  @CreateDateColumn({ name: 'createdAt' })
  created_at: Date

  @UpdateDateColumn({ name: 'updatedAt' })
  updated_at: Date
}

export default State
