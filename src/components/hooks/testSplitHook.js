// 抽离hooks测试
function hook(){
   const [log,add] =  splitHooks()
   return <div>
       <button onClick={add}>加</button>
       <button onClick={log}>打印</button>
   </div>
}
export default hook