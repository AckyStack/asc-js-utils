import { AscUtilsConfiguration } from '../typesAscUtils';
import ApiUtils from './ApiUtils';
import ValidationUtils from './ValidationUtils';
export default class AscUtils {
    private config;
    constructor(config?: AscUtilsConfiguration);
    request(baseUrl?: string): ApiUtils;
    validation(withAsync?: boolean): ValidationUtils;
}
