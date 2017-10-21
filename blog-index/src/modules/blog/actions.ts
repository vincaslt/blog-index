import * as m from './models'

export const requestInformation =
  (id: number): m.RequestInformationAction => ({
    type: m.types.REQUEST_INFORMATION,
    id
  })