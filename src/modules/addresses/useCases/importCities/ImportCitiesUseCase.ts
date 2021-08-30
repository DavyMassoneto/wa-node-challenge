import csvParse from 'csv-parse'
import fs from 'fs'

import ICitiesRepository from '../../repositories/ICitiesRepository'

interface IImportCity {
  id: number
  name: string
  state_abbreviation: string
}

class ImportCitiesUseCase {
  constructor(private citiesRepository: ICitiesRepository) {}

  async loadCities(file: Express.Multer.File): Promise<IImportCity[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path)
      const cities: IImportCity[] = []

      const parseFile = csvParse({ delimiter: ';', encoding: 'utf-8' })

      stream.pipe(parseFile)

      parseFile
        .on('data', async (line) => {
          const [, id, , state_abbreviation, name] = line

          if (!isNaN(id)) {
            cities.push({ id, state_abbreviation, name })
          }
        })
        .on('end', () => {
          resolve(cities)
        })
        .on('error', (err) => {
          reject(err)
        })
    })
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const loadedCities = await this.loadCities(file)

    fs.unlinkSync(file.path)

    const citiesToSave = loadedCities.filter(async (city) => {
      const isCityExists = await this.citiesRepository.findById(city.id)
      return !isCityExists
    })

    await this.citiesRepository.createMany(citiesToSave)
  }
}

export default ImportCitiesUseCase
