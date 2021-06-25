export interface AscUtilsConfiguration {
  feedbacks?: FeedbackHandlers
}

interface FeedbackHandlers {
  apiFeedbacks?: ApiRequestFeedbackHandlers,
  formValidationFeedbacks?: FormValidationFeedbackHandlers
}

interface ApiRequestFeedbackHandlers {
  onSuccess: (message: string) => void,
  onError: (message: string) => void,
  onInfo: (message: string) => void,
  onWarning: (message: string) => void,
  onUnAuthorized: (message: string) => void
}

interface FormValidationFeedbackHandlers {
  onValid: (result: FormValidationResult) => void,
  onInvalid: (result: FormValidationResult) => void
}

interface FormValidationResult {
  isValid: boolean,
  inputElementId: string,
  message?: string
}

export interface AscApiResponse {
  ret: number | undefined
  msg?: string
  data?: object
}

export interface ApiRequestCallback {
  isRequestSucceed: boolean
  feedbackShowed: boolean
  errorMessage?: string
  resultData?: AscApiResponse
}
