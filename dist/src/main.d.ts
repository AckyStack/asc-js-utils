import { AscUtilsConfiguration } from '../typesascUtils';
import ApiUtils from './apiUtils';
export default class AscUtils {
    private config;
    constructor(config?: AscUtilsConfiguration);
    request(baseUrl?: string): ApiUtils;
}
