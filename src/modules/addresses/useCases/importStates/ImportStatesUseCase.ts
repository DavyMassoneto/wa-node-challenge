import csvParse from 'csv-parse'
import fs from 'fs'

class ImportStatesUseCase {
  execute(file: Express.Multer.File): void {
    const stream = fs.createReadStream(file.path)

    const parseFile = csvParse({ delimiter: ';' })

    stream.pipe(parseFile)

    parseFile.on('data', async (line) => {
      // eslint-disable-next-line no-console
      console.log(line)
    })
  }
}

export default ImportStatesUseCase
