import { observable, computed, action } from "mobx";
import React, { Component } from 'react';
import { observer, inject, Provider } from 'mobx-react';

class Count {
  // count = observable(0)
  // add = action(function (value) {
  //   this.count+=value
  // })
  //等同上述
  @observable count = 0;
  @action add = function (value) {
    this.count+=value
  }
  @computed get price() {
    return this.count*10;
  }
}

const count = new Count();


@inject('test')
@observer
class TodoListView extends Component {
  render() {
    return <div>
      <p>数量：{this.props.test.count}</p>
      <p>总价：{this.props.test.price}</p>
      <button onClick={() => this.props.test.add(1)}>加1</button>
    </div>
  }
}

function Index() {
  return <div>
    <h3>首页</h3>
    <Provider test={count}>
      <TodoListView />
    </Provider>
  </div>
}
export default Index
