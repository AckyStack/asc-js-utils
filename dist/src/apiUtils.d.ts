import { ApisauceInstance } from 'apisauce';
import { ApiRequestCallback, ApiRequestFeedbackHandlers } from '../typesascUtils';
export default class ApiUtils {
    private readonly _apisauceInstance;
    private readonly _feedbackHandlers;
    constructor(feedbackHandlers: ApiRequestFeedbackHandlers, baseUrl?: string);
    get(url: string, data?: object): Promise<ApiRequestCallback>;
    postForm(url: string, data?: object): Promise<ApiRequestCallback>;
    get apisauceInstance(): ApisauceInstance;
    private processResponse;
}
