/// <reference types="node" />
/**
 * Created by user on 2018/4/10/010.
 */
export declare type IOptionsStreamPipe = {
    end?: boolean;
};
export declare type IPipe<U extends NodeJS.ReadableStream, T extends NodeJS.WritableStream> = T & {
    pipFrom: U;
};
export declare function pipe<U extends NodeJS.ReadableStream, T extends NodeJS.WritableStream>(srcStream: U, destStream: T, options?: IOptionsStreamPipe): T & {
    pipFrom?: U;
};
import * as self from './index';
export default self;
