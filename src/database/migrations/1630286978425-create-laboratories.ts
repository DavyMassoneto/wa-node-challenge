import { MigrationInterface, QueryRunner, Table } from 'typeorm'

import MigrationUtil from '../../utils/migrationUtil'

export default class createLaboratories1630286978425 implements MigrationInterface {
  private table = new Table({
    name: 'laboratories',
    columns: [
      MigrationUtil.getIDColumn(),
      MigrationUtil.getVarCharColumn({ name: 'name' }),
      MigrationUtil.getVarCharColumn({ name: 'status' }),
      MigrationUtil.getIntegerColumn({ name: 'city_id' }),
      MigrationUtil.getVarCharColumn({ name: 'address' }),
      ...MigrationUtil.getDefaultColumns(),
    ],
    foreignKeys: [MigrationUtil.getForeignKey({ referencedTableName: 'cities', columnName: 'city_id' })],
  })

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table)
  }
}
