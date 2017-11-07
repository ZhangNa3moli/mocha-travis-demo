/**
 * 计算两个数x,y的和
 * @param {number} x第一个求和的数
 * @param {number} y第二个求和的数
 * @return {number} 返回x 和 y的求和结果
 */
function add(x,y){
  if(((typeof x)==='number')&&((typeof y)==='number')){
    return x + y;
  }else{
    return NaN;
  }
}
module.exports.add = add;
