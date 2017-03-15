import * as schema from './Schema'
import {getReferential, postReferential} from '../utils/Action'

export const fetchDryinjects = (exerciseId, dryrunId, noloading) => (dispatch) => {
  var uri = '/api/exercises/' + exerciseId + '/dryruns/' + dryrunId + '/dryinjects'
  return getReferential(schema.arrayOfDryinjects, uri, noloading)(dispatch)
}

export const dryinjectDone = (dryinjectId) => (dispatch) => {
  var data = {'status': 'SUCCESS', 'message': '[\'Manual validation\']'}
  var uri = '/api/dryinjects/' + dryinjectId + '/status'
  return postReferential(null, uri, data)(dispatch)
}