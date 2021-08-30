import { MigrationInterface, QueryRunner, Table } from 'typeorm'

import MigrationUtil from '../../utils/migrationUtil'

export default class createExams1630287299998 implements MigrationInterface {
  private table = new Table({
    name: 'exams',
    columns: [
      MigrationUtil.getIntegerColumn({ name: 'id', isPrimary: true }),
      MigrationUtil.getVarCharColumn({ name: 'name' }),
      MigrationUtil.getVarCharColumn({ name: 'type' }),
      MigrationUtil.getIntegerColumn({ name: 'status' }),
      MigrationUtil.getVarCharColumn({ name: 'file_name' }),
      MigrationUtil.getVarCharColumn({ name: 'storage_name' }),
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
