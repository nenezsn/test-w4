import useAddCountHook from './useAddCountHook'
// 抽离hooks测试
function hook(){
   const [count,add] =  useAddCountHook(1)
   console.log('count',count)
   return <div>
       <button onClick={add}>加</button>
   </div>
}
export default hook