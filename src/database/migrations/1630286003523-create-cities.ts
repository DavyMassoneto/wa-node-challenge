import { MigrationInterface, QueryRunner, Table } from 'typeorm'

import MigrationUtil from '../../utils/migrationUtil'

export default class createCities1630286003523 implements MigrationInterface {
  private table = new Table({
    name: 'cities',
    columns: [
      MigrationUtil.getIntegerColumn({ name: 'id', isPrimary: true }),
      MigrationUtil.getVarCharColumn({ name: 'name' }),
      MigrationUtil.getVarCharColumn({ name: 'state_abbreviation' }),
      ...MigrationUtil.getDefaultColumns(),
    ],
    foreignKeys: [
      {
        referencedTableName: 'states',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        columnNames: ['state_abbreviation'],
        referencedColumnNames: ['abbreviation'],
      },
    ],
  })

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table)
  }
}
