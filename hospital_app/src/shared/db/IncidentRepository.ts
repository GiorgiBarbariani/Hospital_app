import IncidentFilter from '../../incidents/IncidentFilter'
import { relationalDb } from '../config/pouchdb'
import Incident from '../model/Incident'
import Repository from './Repository'

interface SearchOptions {
  status: IncidentFilter
}
class IncidentRepository extends Repository<Incident> {
  constructor() {
    super('incident', relationalDb)
  }

  async search(options: SearchOptions): Promise<Incident[]> {
    return super.search(IncidentRepository.getSearchCriteria(options))
  }

  private static getSearchCriteria(options: SearchOptions): any {
    const statusFilter =
      options.status !== IncidentFilter.all ? [{ 'data.status': options.status }] : []
    const selector = {
      $and: statusFilter,
    }
    return {
      selector,
    }
  }
}

export default new IncidentRepository()
