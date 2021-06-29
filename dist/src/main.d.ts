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
}
