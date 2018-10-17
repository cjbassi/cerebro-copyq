import * as util from 'util'
import { exec } from 'child_process'

const exec_promise = util.promisify(exec)

const REGEXP = /cq\s(.*)/

// const copyq_script_getAll = `
// var result=[];
// for ( var i = 0; i < size(); ++i ) {
//     var obj = {};
//     obj.row = i;
//     obj.mimetypes = str(read("?", i)).split("\n");
//     obj.mimetypes.pop();
//     obj.text = str(read(i));
//     result.push(obj);
// }
// JSON.stringify(result);
// `

// const copyq_script_getMatches = `
// var result=[];
// var match = "%s";
// for ( var i = 0; i < size(); ++i ) {
//     if (str(read(i)).search(new RegExp(match, "i")) !== -1) {
//         var obj = {};
//         obj.row = i;
//         obj.mimetypes = str(read("?", i)).split("\n");
//         obj.mimetypes.pop();
//         obj.text = str(read(i));
//         result.push(obj);
//     }
// }
// JSON.stringify(result);
// `

// async function getAll(display: any) {
//   const stdout = await exec('ls -l')
//   const results = stdout.split('\n').map((line: string) => {
//     return {
//       title: line,
//     }
//   })
//   display(results)
// }

async function getMatch(query: string, display: any) {
  console.log(query, display, exec_promise)
}

function fn({ term, display }: any) {
  const match = term.match(REGEXP)
  if (match) {
    const query = match[1]
    if (query.length == 0) {
      // getAll(display)
      display({title: 'hi'})
    } else {
      getMatch(query, display)
      // getAll(display)
    }
  }
}

export default {
  name: 'cerebro-copyq',
  fn,
  keyword: 'cq'
}
