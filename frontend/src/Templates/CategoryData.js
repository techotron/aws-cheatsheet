import getMockComputeService from '../Mocks/MockComputeService'
import getMockDatabaseService from '../Mocks/MockDatabaseService'
import getMockStorageService from '../Mocks/MockStorageService'
import getMockSecurityService from '../Mocks/MockSecurityService'

function getCategoryData (category, service) {
  if (category === '1') {
    return getMockComputeService(service)
  } else if (category === '2') {
    return getMockStorageService(service)
  } else if (category === '3') {
    return getMockDatabaseService(service)
  } else if (category === '4') {
    return getMockSecurityService(service)
  }
}

export {
  getCategoryData
}
