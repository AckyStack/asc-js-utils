export interface AscUtilsConfiguration {
  feedbacks?: FeedbackHandlers
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
  inputElement: HTMLElement,
  message?: string,
}

interface InputRules {
  element: HTMLElement,
  rules: Rule[]
}

export interface Rule {
  validatorName?: keyof RegexRules | undefined
  customValidator?: Validator,
  invalidMessage: string
}

type Validator = (value: string) => boolean;

export type RegexRules = {
  required: RegExp,
  english: RegExp,
  alphanum: RegExp,
  chinese: RegExp,
  upper: RegExp,
  lower: RegExp,
  hasLetter: RegExp,
  hasDigit: RegExp,
  hasSpec: RegExp,
  nospace: RegExp,
  nodbc: RegExp,
  norepeat: RegExp,
  nospec: RegExp,
  qq: RegExp,
  age: RegExp,
  zipcode: RegExp,
  ip: RegExp,
  ipv6: RegExp,
  port: RegExp,
  domain: RegExp,
  bizcode: RegExp,
  invoice: RegExp,
  bankcard: RegExp,
  pbcard: RegExp,
  ticker: RegExp,
  passport: RegExp,
  score: RegExp,
  currency: RegExp,
  float: RegExp,
  positivefloat: RegExp,
  integer: RegExp,
  positiveint: RegExp,
  decimal: RegExp,
  percent: RegExp,
  even: RegExp,
  odd: RegExp,
  email: RegExp,
  url: RegExp,
  ftp: RegExp,
  http: RegExp,
  ws: RegExp,
  account: RegExp,
  password: RegExp,
  complexPassword: RegExp,
  hex: RegExp,
  color: RegExp,
  ascii: RegExp,
  base64: RegExp,
  md5: RegExp,
  uuid: RegExp,
  mobile: RegExp,
  telphone: RegExp,
  phone: RegExp,
  year: RegExp,
  month: RegExp,
  day: RegExp,
  hour: RegExp,
  minute: RegExp,
  hmt: RegExp,
  time: RegExp,
  date: RegExp,
  datetime: RegExp,
  idcard: RegExp,
  autocard: RegExp,
  longitude: RegExp,
  latitude: RegExp,
  londms: RegExp,
  latdms: RegExp,
  approval: RegExp,
  citycode: RegExp,
  address: RegExp,
  isbn: RegExp,
  tag: RegExp,
  jwt: RegExp,
  mac: RegExp,
  mask: RegExp,
  thunder: RegExp,
  ed2k: RegExp,
  magnet: RegExp,
  path: RegExp,
  file: RegExp,
  linuxfile: RegExp,
  imgurl: RegExp,
  doc: RegExp
}
