import { BaseException } from './base-exception';

/**
 * 系统异常, 需要重试
 */
export class SysException extends BaseException {
  readonly serialVersionUID = Symbol('unique');

  private static readonly DEFAULT_ERR_CODE: string = 'SYS_ERROR';

  constructor(errMessage: string, errCode?: string, extra?: object, e?: Error) {
    if (!!errCode || errCode == null) {
      errCode = SysException.DEFAULT_ERR_CODE;
    }
    super(errMessage, errCode, extra, e);
  }
}
