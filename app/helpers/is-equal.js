import { helper } from '@ember/component/helper';

// export default helper(function isEqual(params /*, hash*/) {
//   return params[0] === params[1];
// });

export function isEqual(params /*, hash*/) {
  return params[0] === params[1];
}

export default helper(isEqual);
