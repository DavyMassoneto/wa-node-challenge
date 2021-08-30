import csvParse from 'csv-parse'
import fs from 'fs'

import IStatesRepository from '../../repositories/IStatesRepository'

class ImportStatesUseCase {
  constructor(private statesRepository: IStatesRepository) {}

  async execute(file: Express.Multer.File): Promise<void> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path)

      const parseFile = csvParse({ delimiter: ';', encoding: 'utf-8' })

      stream.pipe(parseFile)

      parseFile
        .on('data', async (line) => {
          const [id, name, abbreviation] = line
          await this.statesRepository.create({ id, name, abbreviation })
        })
        .on('end', () => {
          resolve()
        })
        .on('error', (err) => {
          reject(err)
        })
    })
  }
}

export default ImportStatesUseCase
