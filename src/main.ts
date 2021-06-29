import { AscUtilsConfiguration } from '/#/AscUtils'
import ApiUtils from './ApiUtils'
import ValidationUtils from './ValidationUtils'

export default class AscUtils {
  private config: AscUtilsConfiguration = {
    feedbacks: {
      apiFeedbacks: {
        onSuccess: (msg) => {console.log('[Api Request]: ' + msg)},
        onError: (msg) => {console.log('[Api Request]: ' + msg)},
        onWarning: (msg) => {console.log('[Api Request]: ' + msg)},
        onInfo: (msg) => {console.log('[Api Request]: ' + msg)},
        onUnAuthorized: (msg) => {console.log('[Api Request]: UnAuthorized ' + msg)}
      },
      formValidationFeedbacks: {
        onValid: (result) => {console.log(`[Form Validation]: (${result.inputElement.id}) (${result.isValid}) ${result.message}`)},
        onInvalid: (result) => {console.log(`[Form Validation]: (${result.inputElement.id}) (${result.isValid}) ${result.message}`)}
      }
    }
  }

  constructor (config?: AscUtilsConfiguration) {
    if (config !== undefined) {
      if (config.feedbacks !== undefined) {
        if (config.feedbacks.apiFeedbacks !== undefined) {
          this.config.feedbacks!.apiFeedbacks = config.feedbacks.apiFeedbacks
        }
        if (config.feedbacks.formValidationFeedbacks !== undefined) {
          this.config.feedbacks!.formValidationFeedbacks = config.feedbacks.formValidationFeedbacks
        }
      }
    }
    console.debug('AscUtils loaded.')
  }

  request (baseUrl?: string) {
    return new ApiUtils(this.config.feedbacks!.apiFeedbacks!, baseUrl)
  }

  validation (withAsync?: boolean) {
    return new ValidationUtils(this.config.feedbacks!.formValidationFeedbacks!, withAsync)
  }
}
