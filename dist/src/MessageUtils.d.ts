export default class MessageUtils {
    _prefixCls: string;
    _default: {
        top: number;
        duration: number;
    };
    info(options: any): void;
    success(options: any): void;
    warning(options: any): void;
    error(options: any): void;
    loading(options: any): void;
    config({ top, duration }: {
        top?: number | undefined;
        duration?: number | undefined;
    }): void;
    destroy(): void;
    /**
     * @description: 渲染消息
     * @param {String} type 类型
     * @param {Object | String} options 详细格式
     */
    _message(type: string, options: any | string): void;
    /**
     * @description: 渲染消息
     * @param {String} content 消息内容
     * @param {Number} duration 持续时间
     * @param {String} type 消息类型
     */
    _render(content?: string, duration?: number, type?: string, onClose?: () => void, closable?: boolean): void;
    /**
     * @description: 删除消息
     * @param {Element} contentBox 父节点
     * @param {Element} messageDOM 消息节点
     * @param {Number} duration 持续时间
     */
    _removeMsg(contentBox: Element, messageDOM: Element, onClose: any): void;
    /**
     * @description: 获取图标
     * @param {String} type
     * @return {String} DOM HTML 字符串
     */
    _getIcon(type?: string): string;
    /**
     * @description: 获取消息节点
     * @param {String} type 类型
     * @param {String} content 消息内容
     * @return {Element} 节点DOM对象
     */
    _getMsgHtml(type: string, content: string): Element;
    /**
     * @description: 添加关闭按钮
     * @param {Element} messageDOM 消息节点DOM
     */
    _addClosBtn(messageDOM: Element, remove: any, removeTimer: any): void;
    /**
     * @description: 获取父节点容器
     * @return {Element} 节点DOM对象
     */
    _getContentBox(): Element;
    /**
     * @description: 重新设置父节点高度
     */
    _setContentBoxTop(): void;
    /**
     * @description: 恢复默认值
     */
    _resetDefault(): void;
}
