import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  HttpException,
  Injectable,
  Logger,
} from '@nestjs/common';
import { Response as AppResponse } from '../dto/Response';
import { BizException } from './biz-exception';
import { SysException } from './sys-exception';
import { BaseException } from './base-exception';
import { Response, Request } from 'express';
import ErrorCode from '../constants/error-code';
import { baseConfig } from '../config/base';
@Catch()
@Injectable()
export default class GlobalExceptionFilter implements ExceptionFilter {
  private bizConfig = baseConfig;

  constructor() {}
  public async catch(error: any, host: ArgumentsHost): Promise<void> {
    host = host as ArgumentsHost;
    const request = host.switchToHttp().getRequest<Request>();
    const response = host.switchToHttp().getResponse<Response>();

    if (error instanceof BizException) {
      const responseTemp = AppResponse.buildFailure(
        error.getErrorCode(),
        error.getErrorMessage(),
      );
      if (error.getExtra()['meta']) {
        responseTemp['meta'] = error.getExtra()['meta'];
      }
      response.status(error.getExtra()['httpStatus'] || 500).send(responseTemp);
    } else if (error instanceof SysException) {
      response
        .status(
          error.getExtra() != undefined ? error.getExtra()['httpStatus'] : 500,
        )
        .send(
          AppResponse.buildFailure(
            error.getErrorCode(),
            error.getErrorMessage(),
          ),
        );
    } else if (error instanceof BadRequestException) {
      const message = this.bizConfig
        ? ErrorCode.INVALID_PARAM.message + ' : ' + error.message
        : ErrorCode.INVALID_PARAM.message;
      response
        .status(ErrorCode.INVALID_PARAM.httpStatus as number)
        .send(AppResponse.buildFailure(ErrorCode.INVALID_PARAM.code, message));
    } else if (error instanceof HttpException) {
      const message = this.bizConfig.isDevelopment
        ? String(error.message)
        : 'Internal Error';
      response
        .status(error.getStatus() || 500)
        .send(AppResponse.buildFailure(String(error.getStatus()), message));
    } else {
      if (error instanceof Error) {
        let body = '';
        try {
          body = JSON.stringify(request.body || {}) || '';
          if (body.length > 10000) {
            body = '';
          }
        } catch (e) {
          body = '';
        }
        Logger.error('GlobalExceptionFilter ', error.stack, {
          message: error.message,
          requestMethod: request.method,
          requestUrl: request.url,
          requestBody: body,
          clientIp: request.ip,
        });
        const message = this.bizConfig.isDevelopment
          ? String(error.message)
          : 'Internal Error';
        response.status(500).send(AppResponse.buildFailure('500', message));
      }
    }

    const clientIp = request.ip;
    if (error instanceof BaseException) {
      Logger.error(
        `${error.getErrorMessage()}, ${error.getErrorCode()}`,
        error.stack,
        `Method: ${request.method}; ` +
          `Path: ${request.path}; ` +
          `Ip: ${clientIp}`,
      );
    } else {
      Logger.error(
        error.message,
        error.stack,
        `Method: ${request.method}; ` +
          `Path: ${request.path}; ` +
          `Ip: ${clientIp}`,
      );
    }
  }
}

process.on('uncaughtException', (err) => {
  Logger.error(err.message);
});
