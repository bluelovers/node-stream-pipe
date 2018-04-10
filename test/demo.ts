/**
 * Created by user on 2018/4/10/010.
 */

import * as through2 from 'through2';
import createReadStream from '../fs';

let file = '../.gitignore';

createReadStream(file).pipe(through2.obj(function (chunk, enc, cb)
{
	console.log(this.pipeFrom.path);
	console.log(this.pipeFrom.bytesRead);

	this.push(chunk);
	cb();
}));
