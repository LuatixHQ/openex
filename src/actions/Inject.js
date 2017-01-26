import * as schema from './Schema'
import {getReferential, fileDownload, putReferential, postReferential, delReferential} from '../utils/Action'

export const fetchInjects = (exerciseId, eventId) => (dispatch) => {
  var uri = '/api/exercises/' + exerciseId + '/events/' + eventId + '/injects'
  return getReferential(schema.arrayOfInjects, uri)(dispatch)
}

export const fetchAllInjects = (exerciseId, noloading) => (dispatch) => {
  var uri = '/api/exercises/' + exerciseId + '/injects'
  return getReferential(schema.arrayOfInjects, uri, noloading)(dispatch)
}

export const downloadExportInjects = (exerciseId) => (dispatch) => {
    return fileDownload('/api/exercises/' + exerciseId + '/injects.xlsx')(dispatch)
}

export const fetchGlobalInjects = () => (dispatch) => {
  return getReferential(schema.arrayOfInjects, '/api/injects_all')(dispatch)
}

export const updateInject = (exerciseId, eventId, incidentId, injectId, data) => (dispatch) => {
  var uri = '/api/exercises/' + exerciseId + '/events/' + eventId + '/incidents/' + incidentId + '/injects/' + injectId
  return putReferential(schema.inject, uri, data)(dispatch)
}

export const addInject = (exerciseId, eventId, incidentId, data) => (dispatch) => {
  var uri = '/api/exercises/' + exerciseId + '/events/' + eventId + '/incidents/' + incidentId + '/injects'
  return postReferential(schema.inject, uri, data)(dispatch)
}

export const deleteInject = (exerciseId, eventId, incidentId, injectId) => (dispatch) => {
  var uri = '/api/exercises/' + exerciseId + '/events/' + eventId + '/incidents/' + incidentId + '/injects/' + injectId
  return delReferential(uri, 'injects', injectId)(dispatch)
}

export const tryInject = (exerciseId, eventId, incidentId, injectId) => (dispatch) => {
  var uri = '/api/exercises/' + exerciseId + '/events/' + eventId + '/incidents/' + incidentId + '/injects/' + injectId + '/try'
  return postReferential(null, uri, null)(dispatch)
}

export const shiftAllInjects = (exerciseId, data) => (dispatch) => {
  var uri = '/api/exercises/' + exerciseId + '/injects'
  return putReferential(schema.arrayOfInjects, uri, data)(dispatch)
}

export const fetchInjectTypes = () => (dispatch) => {
  return getReferential(schema.arrayOfInjectTypes, '/api/inject_types')(dispatch)
}