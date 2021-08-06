/**
 * Created by user on 2018/4/10/010.
 */

import { ReadStream as fsReadStream, PathLike } from "fs";

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

export class ReadStream extends fsReadStream
{
	public override path: string;
	public cwd: string;

	constructor(file: PathLike, ...argv)
	{
		// @ts-ignore
		super(file, ...argv);
		this.cwd = process.cwd();
	}

	override pipe<T extends NodeJS.WritableStream>(destination: T, options?: IOptionsStreamPipe): IPipe<this & ReadStream & fsReadStream, T>
	{
		return pipe<this & ReadStream & fsReadStream, T>(this, destination, options);
	}

	static createReadStream(file: PathLike, options?: IOptionsFsCreateReadStream, ...argv): ReadStream & fsReadStream
	{
		// @ts-ignore
		return new this(file, options, ...argv);
	}
}

export const createReadStream = ReadStream.createReadStream.bind(ReadStream) as typeof ReadStream.createReadStream;

export default createReadStream;
