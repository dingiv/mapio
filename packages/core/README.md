# mapio

store element and component, use jsx syntax to manage your state and get powerful features of:

1. reactive, functional, declarative, asynchronous, AOP
2. IO 操作、异步操作、数据修改都可以看做是同一类的东西，

- 声明式定义数据、数据来源、数据修改方式，一个数据可以有多个数据来源，

  > data 标签定义数据，src 定义来源，cache 定义缓存，group 进行分组

  ```jsx
   function App() {
    return (
      <data id="user" type="object">
        <src>
          <http url="https://api.example.com/user" />
        </src>
        <cache />
      </data>
      <div class="user">
       <!-- 捕获脏函数 -->
      <advice></advice>
      
       <!-- 添加新元素 -->
      <pseudo position="">
      <before></before>
      <after></after>
      <start></start>
      <end></end>
      </pseudo>
      
      </div>
      <env>
         <state />
      </env>
      
      <state type="string" id="ikun-0" default={jsx}>
         <src>
      
         </src>
         <cache></cache>
         <div></div>
      </state>
      
      <state id="cxk" type="object" version="1.0.0">
         <!-- query('#cxk number') -->
         <number class="c1" key="age" format={} parse={} step="1" min="0" max="999" />
         <boolean key="gender" />
         <string key="name" step="1" min="0" max="12" />
         <link query="#ck" map={x=>x*2} />
         <src>{
            async ()=> ({
               name:"zs",
               age:12
                })}
         </src>
         <http url="https://api.example.com/">
         {/* http: 继承src */}
         </http>
         <src>
            <pull inject={['#csx','xv','vzxcv']}>{(x)=>({name:x.name})}</pull>
            <push>{(x)=>({name:x.name})}</push>
            <io>{(x)=>({name:x.name})}</io>
            <update></update>
         </src>
      </state>
      
      
      <state type="array">
         {
          (item)=> <item  ></item>
         }
      </state>
      );
   }
   ```

```
state <-
   - boolean
   - number
   - bigint
   - string
   - array
   - object

```

- 查询语言，仿照 CSS，#id，.属性访问，[]，${}

  ```
  * 通用选择器
  number、div 元素选择器
  .class 类名选择器
  #id id选择器
  ` ` 级联选择
  [] 属性选择
  > 直接子代选择器

  ~ 长子选择器
  + 次子选择器

  , 选择器列表


  ```

- ssr 支持
- 数据校验，校验参数、校验请求结果、数据重组
- 数据缓存
- 支持多数据源
- 面向切面编程
- 接口联调测试、压测
- vite-plugin
- 事务
- 多客户端、客户端身份认证

![alt text](image.png)
