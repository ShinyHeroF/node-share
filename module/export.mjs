// const name1 = function () {
//     console.log('I am name1');
// }
// const name2 = function () {
//     console.log('I am name1');
// }
const m =  {
    name1:function () {
    console.log('I am name1');
},
    name2:function () {
    console.log('I am name1');
}
};
export default m;
export const name1 = m.name1;
export const name2 = m.name2;
// module.exports = name1