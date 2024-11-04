import _ from 'lodash';
import noNeedRevisit from '../data/revisit/noNeedRevisit.json' assert { type: 'json' };
import revisitSystemAllProduct from '../data/revisit/revisitSystemAllProduct.json' assert { type: 'json' };

/** 筛选出所有需要做回访的险种 */
const allNeedRevisitCoverage = _.differenceWith(Object.keys(revisitSystemAllProduct), noNeedRevisit, _.isEqual);

console.log('allNeedRevisitCoverage ==>', allNeedRevisitCoverage);