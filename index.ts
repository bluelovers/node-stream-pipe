/**
 * Created by user on 2018/4/10/010.
 */

export type IOptionsStreamPipe = {
	end?: boolean;
}

export type IPipe<U extends NodeJS.ReadableStream, T extends NodeJS.WritableStream> = T & {
	pipFrom: U,
};

export function pipe<U extends NodeJS.ReadableStream, T extends NodeJS.WritableStream>(srcStream: U, destStream: T, options?: IOptionsStreamPipe)
{
	let _dest = destStream as T & {
		pipFrom?: U,
	};

	_dest.pipFrom = srcStream;

	return srcStream.pipe(_dest);
}

import * as self from './index';
export default self;
