import { ApiRequestFeedbackHandlers, AscUtilsConfiguration, FormValidationFeedbackHandlers } from '../typesAscUtils';
import ApiUtils from './ApiUtils';
import ValidationUtils from './ValidationUtils';
import MessageUtils from './MessageUtils';
export default class AscUtils {
    private _config;
    private msgu;
    constructor(config?: AscUtilsConfiguration);
    setApiFeedbacks(fb: ApiRequestFeedbackHandlers): void;
    setFormValidationFeedbacks(fb: FormValidationFeedbackHandlers): void;
    request(baseUrl?: string): ApiUtils;
    validation(withAsync?: boolean): ValidationUtils;
    msg(): MessageUtils;
    md5(str: string): string;
    sha256(str: string): string;
    encryptPassword(password: string, username: string): string;
    base64Encode(str: string): string;
    base64Decode(str: string): string;
}
