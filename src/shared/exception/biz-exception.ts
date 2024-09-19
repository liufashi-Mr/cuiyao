import { BaseException } from './base-exception';

/**
 * 业务异常, 不需要重试
 */
export class BizException extends BaseException {
  readonly serialVersionUID = Symbol('unique');

  private static readonly DEFAULT_ERR_CODE: string = 'BIZ_ERROR';

  constructor(errMessage: string, errCode?: string, extra?: object, e?: Error) {
    if (errCode == null) {
      errCode = BizException.DEFAULT_ERR_CODE;
    }
    super(errMessage, errCode, extra, e);
  }
}
