import { FormValidationFeedbackHandlers, InputRules } from '../typesAscUtils';
export default class ValidationUtils {
    private readonly _feedbackHandlers;
    private initialized;
    private readonly _withAsync;
    private validateResult;
    private inputRules;
    constructor(feedbackHandlers: FormValidationFeedbackHandlers, withAsync?: boolean);
    init(inputRules: InputRules[]): ValidationUtils;
    validate(): ValidationUtils;
    private handleValidateField;
    getResult(): boolean;
}
