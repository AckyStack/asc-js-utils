import { ApiRequestFeedbackHandlers, AscUtilsConfiguration, FormValidationFeedbackHandlers } from '/#/AscUtils'
import ApiUtils from './ApiUtils'
import ValidationUtils from './ValidationUtils'
import MessageUtils from './MessageUtils'
import { Md5 } from 'ts-md5'
import CryptoJS from 'crypto-js'
import { Base64 } from 'js-base64'

export default class AscUtils {
  private _config: AscUtilsConfiguration = {
    feedbacks: {
      apiFeedbacks: {
        onSuccess: (msg) => {
          this.msg().success(msg)
        },
        onError: (msg) => {
          this.msg().error(msg)
        },
        onWarning: (msg) => {
          this.msg().warning(msg)
        },
        onInfo: (msg) => {
          this.msg().info(msg)
        },
        onUnAuthorized: (msg) => {
          console.log('[Api Request]: UnAuthorized ' + msg)
          this.msg().info('UnAuthorized')
        }
      },
      formValidationFeedbacks: {
        onValid: (result) => {console.log(`[Form Validation]: (${result.inputElement.id}) (${result.isValid}) ${result.message}`)},
        onInvalid: (result) => {console.log(`[Form Validation]: (${result.inputElement.id}) (${result.isValid}) ${result.message}`)}
      }
    }
  }

  private msgu: MessageUtils

  constructor (config?: AscUtilsConfiguration) {
    if (config !== undefined) {
      if (config.feedbacks !== undefined) {
        if (config.feedbacks.apiFeedbacks !== undefined) {
          this._config.feedbacks!.apiFeedbacks = config.feedbacks.apiFeedbacks
        }
        if (config.feedbacks.formValidationFeedbacks !== undefined) {
          this._config.feedbacks!.formValidationFeedbacks = config.feedbacks.formValidationFeedbacks
        }
      }
    }
    this.msgu = new MessageUtils()
    console.debug('AscUtils loaded.')
  }

  setApiFeedbacks (fb: ApiRequestFeedbackHandlers) {
    this._config.feedbacks!.apiFeedbacks = fb
  }

  setFormValidationFeedbacks (fb: FormValidationFeedbackHandlers) {
    this._config.feedbacks!.formValidationFeedbacks = fb
  }

  request (baseUrl?: string) {
    return new ApiUtils(this._config.feedbacks!.apiFeedbacks!, baseUrl)
  }

  validation (withAsync?: boolean) {
    return new ValidationUtils(this._config.feedbacks!.formValidationFeedbacks!, withAsync)
  }

  msg (): MessageUtils {
    return this.msgu
  }

  md5 (str: string): string {
    return Md5.hashStr(str).toString()
  }

  sha256 (str: string): string {
    return CryptoJS.SHA256(str).toString()
  }

  encryptPassword (password: string, username: string): string {
    const salt = '9.$![i' + this.sha256(`AckyStack|${username}|${password}`).toString()
    return this.md5(this.sha256(password + salt))
  }

  base64Encode (str: string): string {
    return Base64.encode(str)
  }

  base64Decode (str: string): string {
    return Base64.decode(str)
  }
}

//inject msg styles
const style = document.createElement('style')
style.innerHTML = `#messageBox{font-size:14px;position:fixed;z-index:1010;width:100%;left:0;color:#515a6e;pointer-events:none;-webkit-font-smoothing:antialiased;}.i-message-box{padding:7px;overflow:hidden;box-sizing:content-box;text-align:center;transition:height .3s ease-in-out,padding .3s ease-in-out;}.i-message-message{display:inline-block;pointer-events:all;padding:8px 16px;border-radius:4px;box-shadow:0 1px 6px rgb(0 0 0 / 20%);background:#fff;position:relative;}.i-message-message .i-message-content-text,svg{display:inline-block;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;text-rendering:optimizeLegibility;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;}.i-message-message svg{width:16px;height:16px;margin-right:4px;vertical-align:middle;}.i-message-message svg.i-message-btn{cursor:pointer;color:#999;width:14px;height:14px;margin:0;margin-left:10px;}.i-message-message svg.i-message-btn:hover{color:#444;}svg.loading{animation:loading 1.8s linear infinite;}@-webkit-keyframes loading{0%{-webkit-transform:rotate(0deg);}50%{-webkit-transform:rotate(180deg);}100%{-webkit-transform:rotate(360deg);}}@keyframes loading{0%{-webkit-transform:rotate(0deg);}50%{-webkit-transform:rotate(180deg);}100%{-webkit-transform:rotate(360deg);}}.animate__animated{--animate-duration:0.4s;}.animate__animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-duration:var(--animate-duration);animation-duration:var(--animate-duration);-webkit-animation-fill-mode:both;animation-fill-mode:both;}.animate__fadeOutUp{-webkit-animation-name:fadeOutUp;animation-name:fadeOutUp;}@-webkit-keyframes fadeOutUp{0%{opacity:1;}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);}}@keyframes fadeOutUp{0%{opacity:1;}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);}}.animate__fadeInDown{-webkit-animation-name:fadeInDown;animation-name:fadeInDown;}@-webkit-keyframes fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0);}}@keyframes fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0);}}`
document.head.appendChild(style)
//@ts-ignore
window.$ascu = new AscUtils()

