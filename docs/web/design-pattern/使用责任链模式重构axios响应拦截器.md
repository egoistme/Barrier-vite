# 使用责任链模式重构axios响应拦截器
## 问题

在项目中，我们使用axios作为请求库，而拦截器则是axios的核心。之前的拦截器代码大概是这样的。

```js
const service = axios.create({baseURL,timeout})
const whiteList = [40002,40003,40004]
webService.interceptors.response.use(
	(response)=>{
    const res = response.data;
   	if(res.code!==20000){
      if(res.code ===401){
        ...
        return Promise.reject(new Error(res.msg))
      }else if(res.code ===420){
        ...
        throw new Error(res.msg)
      }else if(whiteList.includes(res.code)){
        ...
        return res
      }
    }
  },
  (error)=>{
    ...
  }
)
```

从代码中至少可以看出如下缺点：

1. 每一次新增需要处理的返回值，都需要新增一个else if分支，可读性不佳。
2. 针对不同的返回值有不同的处理方式，比如直接返回数据、返回`Promise.reject()`,`new Error()`等，但是没有聚合。

## 结构设计

经过思考之后，我发现本项目中的拦截器十分适用**责任链模式**，下面是这种设计模式的简单介绍。

### 责任链模式

责任链模式是一种行为设计模式，允许你沿着处理程序链传递请求。在接受到一个请求后，每个处理程序决定是处理请求还是将请求传递给链中的下一个处理程序。



