import { MigrationInterface, QueryRunner, Table } from 'typeorm'

import MigrationUtil from '../../utils/migrationUtil'

export default class createCities1630286003523 implements MigrationInterface {
  private table = new Table({
    name: 'cities',
    columns: [
      MigrationUtil.getIntegerColumn({ name: 'id', isPrimary: true }),
      MigrationUtil.getVarCharColumn({ name: 'name' }),
      MigrationUtil.getIntegerColumn({ name: 'state_id' }),
      ...MigrationUtil.getDefaultColumns(),
    ],
    foreignKeys: [MigrationUtil.getForeignKey({ referencedTableName: 'states', columnName: 'state_id' })],
  })

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table)
  }
}
