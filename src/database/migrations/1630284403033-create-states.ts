import { MigrationInterface, QueryRunner, Table } from 'typeorm'

import MigrationUtil from '../../utils/migrationUtil'

export default class createStates1630284403033 implements MigrationInterface {
  private table = new Table({
    name: 'states',
    columns: [
      MigrationUtil.getIntegerColumn({ name: 'id', isPrimary: true }),
      MigrationUtil.getVarCharColumn({ name: 'name' }),
      MigrationUtil.getVarCharColumn({ name: 'abbreviation', isUnique: true }),
      ...MigrationUtil.getDefaultColumns(),
    ],
  })

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table)
  }
}
