import { ErrorCodeType } from '../constants/error-code';
import { BizException } from './biz-exception';
import { SysException } from './sys-exception';

export type ResponseMeta = {
  showMessage?: {
    type: 'info' | 'error' | 'success';
    content: string;
  };
  showNotification?: {
    type: 'info' | 'error' | 'success';
    message: string;
    description?: string;
  };
  [key: string]: any;
};
//公共异常生成器
export class ExceptionFactory {
  //业务异常
  static bizException(
    errorCode: ErrorCodeType,
    overrideMessage?: string,
    meta?: ResponseMeta,
  ): BizException {
    const code = errorCode.code;
    let message = errorCode.message;
    if (overrideMessage) {
      message = overrideMessage;
    }
    return new BizException(message, code, {
      httpStatus: errorCode.httpStatus,
      meta: meta,
    });
  }

  //系统异常
  static sysException(
    errorMessage: string,
    errorCode?: string,
    extra?: object,
    e?: Error,
  ): SysException {
    return new SysException(errorMessage, errorCode, e);
  }
}
