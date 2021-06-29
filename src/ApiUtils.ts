import { ApiResponse, ApisauceInstance, create } from 'apisauce'
import { ApiRequestCallback, ApiRequestFeedbackHandlers, AscApiResponse } from '/#/AscUtils'
import QueryString from 'qs'

export default class ApiUtils {
  private readonly _apisauceInstance: ApisauceInstance
  private readonly _feedbackHandlers: ApiRequestFeedbackHandlers

  constructor (feedbackHandlers: ApiRequestFeedbackHandlers, baseUrl?: string) {
    this._feedbackHandlers = feedbackHandlers
    this._apisauceInstance = create({
      baseURL: baseUrl,
      withCredentials: true,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
      }
    })
  }

  async get (url: string, data?: object): Promise<ApiRequestCallback> {
    const res = await this._apisauceInstance.get<AscApiResponse>(url, data)
    return this.processResponse(res)
  }

  async postForm (url: string, data?: object): Promise<ApiRequestCallback> {
    const res = await this._apisauceInstance.post<AscApiResponse>(url, QueryString.stringify(data))
    return this.processResponse(res)
  }

  get apisauceInstance (): ApisauceInstance {
    return this._apisauceInstance
  }

  private processResponse (r: ApiResponse<AscApiResponse>): ApiRequestCallback {
    if (r === undefined) {
      this._feedbackHandlers.onError('发生未知错误，请稍候重试!')
      return {
        isRequestSucceed: false,
        feedbackShowed: true
      }
    }

    if (!r.ok) {
      this._feedbackHandlers.onError('网络繁忙，请稍候重试!')
      console.error(r.problem)
      return {
        isRequestSucceed: false,
        feedbackShowed: true
      }
    }

    if (r.data?.ret === undefined || r.data?.ret === null) {
      this._feedbackHandlers.onError('系统繁忙，请稍候重试!')
      console.error(r.problem)
      return {
        isRequestSucceed: false,
        feedbackShowed: true
      }
    }

    if (r.data.ret === -5) {
      this._feedbackHandlers.onUnAuthorized('请您登录!')
      return {
        isRequestSucceed: true,
        feedbackShowed: true,
        resultData: r.data
      }
    }

    if (r.data.ret === -1) {
      this._feedbackHandlers.onWarning(r.data.msg !== undefined ? r.data.msg : '')
      return {
        isRequestSucceed: true,
        feedbackShowed: true,
        resultData: r.data
      }
    }

    if (r.data.ret !== 0) {
      this._feedbackHandlers.onError(r.data.msg !== undefined ? r.data.msg : '')
      return {
        isRequestSucceed: true,
        feedbackShowed: true,
        resultData: r.data
      }
    }

    return {
      isRequestSucceed: true,
      feedbackShowed: false,
      resultData: r.data
    }
  }
}
