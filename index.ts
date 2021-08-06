/**
 * Created by user on 2018/4/10/010.
 */

import { ReadStream as fsReadStream } from "fs";
import { ReadStream, createReadStream } from "./fs";

export { createReadStream }

export function pipe<U extends NodeJS.ReadableStream, T extends NodeJS.WritableStream>(srcStream: U, destStream: T, options?: IOptionsStreamPipe): IPipe<U, T>
{
	let _dest = destStream as T & {
		pipeFrom: U,
	};

	_dest.pipeFrom = srcStream;

	if (srcStream instanceof ReadStream)
	{
		return fsReadStream.prototype.pipe.call(srcStream, _dest) as any;
	}

	return srcStream.pipe(_dest) as any;
}

export type IOptionsStreamPipe = {
	end?: boolean;
}

export type IPipe<U extends NodeJS.ReadableStream, T extends NodeJS.WritableStream> = T & {
	pipeFrom: U,
};

export default pipe;
