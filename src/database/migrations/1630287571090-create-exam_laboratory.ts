import { MigrationInterface, QueryRunner, Table } from 'typeorm'

import MigrationUtil from '../../utils/migrationUtil'

export default class createExamLaboratory1630287571090 implements MigrationInterface {
  private table = new Table({
    name: 'exams',
    columns: [
      MigrationUtil.getIDColumn(),
      MigrationUtil.getUuidColumn({ name: 'exam_id' }),
      MigrationUtil.getUuidColumn({ name: 'laboratory_id' }),
      ...MigrationUtil.getDefaultColumns(),
    ],
    foreignKeys: [
      MigrationUtil.getForeignKey({ referencedTableName: 'exams', columnName: 'exam_id' }),
      MigrationUtil.getForeignKey({ referencedTableName: 'laboratories', columnName: 'laboratory_id' }),
    ],
  })

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table)
  }
}
