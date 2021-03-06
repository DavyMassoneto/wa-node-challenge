import { TableColumnOptions } from 'typeorm/schema-builder/options/TableColumnOptions'
import { TableForeignKeyOptions } from 'typeorm/schema-builder/options/TableForeignKeyOptions'

type ColumnOptions = Pick<TableColumnOptions, 'name' | 'length' | 'isPrimary' | 'isNullable' | 'isUnique' | 'default'>

interface IForeignKeyOptions {
  referencedTableName: string
  columnName: string
}

export default class MigrationUtil {
  /**
   * Return the default ID column for database POSTGRES
   */
  public static getIDColumn(): TableColumnOptions {
    return {
      name: 'id',
      type: 'uuid',
      isPrimary: true,
      generationStrategy: 'uuid',
      default: 'uuid_generate_v4()',
    }
  }

  /**
   * Return integer options
   * @param columnOptions
   */
  public static getIntegerColumn(columnOptions: ColumnOptions): TableColumnOptions {
    return { ...columnOptions, type: 'integer' }
  }

  /**
   * Return varchar options
   * @param columnOptions
   */
  public static getVarCharColumn(columnOptions: ColumnOptions): TableColumnOptions {
    return { ...columnOptions, type: 'varchar' }
  }

  /**
   * Return uuid options
   * @param columnOptions
   */
  public static getUuidColumn(columnOptions: ColumnOptions): TableColumnOptions {
    return { ...columnOptions, type: 'uuid' }
  }

  /**
   * return ForeignKey options
   * @param foreignKeyOptions
   */
  public static getForeignKey(foreignKeyOptions: IForeignKeyOptions): TableForeignKeyOptions {
    return {
      referencedTableName: foreignKeyOptions.referencedTableName,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      columnNames: [foreignKeyOptions.columnName],
      referencedColumnNames: ['id'],
    }
  }

  /**
   * Returns Fields: created_at, updated_at, deleted_at
   */
  public static getDefaultColumns(): TableColumnOptions[] {
    const columns: TableColumnOptions[] = []
    columns.push({ name: 'created_at', type: 'timestamp', default: 'NOW()' })
    columns.push({ name: 'updated_at', type: 'timestamp', default: 'NOW()', onUpdate: 'NOW()' })
    return columns
  }
}
