/**
 * Created by user on 2018/4/10/010.
 */

import through2 from 'through2';
import createReadStream from '../fs';

let file = '../.gitignore';

createReadStream(file).pipe(through2.obj(function (chunk, enc, cb)
{
	// @ts-ignore
	console.log(this.pipeFrom.path);
	// @ts-ignore
	console.log(this.pipeFrom.bytesRead);

	// @ts-ignore
	console.log(this.pipeFrom.cwd);

	// @ts-ignore
	this.push(chunk);
	cb();
}));
