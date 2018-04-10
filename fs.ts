/**
 * Created by user on 2018/4/10/010.
 */

import * as fs from "fs";
import * as stream from "stream";

import { IOptionsStreamPipe, pipe, IPipe } from './index';

export type IOptionsFsCreateReadStream = {
	flags?: string;
	encoding?: string;
	fd?: number;
	mode?: number;
	autoClose?: boolean;
	start?: number;
	end?: number;
	highWaterMark?: number;
};

export class ReadStream extends fs.ReadStream
{
	pipe<T extends NodeJS.WritableStream>(destination: T, options?: IOptionsStreamPipe): IPipe<this, T>
	{
		return pipe(this, destination, options) as IPipe<this, T>;
	}

	static createReadStream(file: string | Buffer, options?: IOptionsFsCreateReadStream, ...argv): ReadStream & fs.ReadStream
	{
		// @ts-ignore
		return new this(file, options, ...argv);
	}
}

export const createReadStream = ReadStream.createReadStream.bind(ReadStream) as typeof ReadStream.createReadStream;

export default createReadStream;
