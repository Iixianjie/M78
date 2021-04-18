---
title: Seed - 种子
group:
  title: 工具
  path: /utils
  order: 5000
---

# Seed 种子

提供权限、状态管理等核心且基础的功能

## 状态管理

**应用状态**

类似`redux`, 状态由一个状态对象表示，但是 seed 的使用更加轻松和简单.

💡 你也可以通过`create()`来创建多个 seed 实例，这可以实现某些状态管理库中的`model`概念

**获取状态**

- 有三种方式获取状态, 分别是 `seed实例` 下的 `getState()`、`useState()`、`<State />` 三个 api
- `useDeps`和`Deps`的优势是会响应 deps 的变更而进行更新，而`getState()`用于简单的获取状态

<code src="./get-deps-demo.tsx" />

## 权限控制

### 基本说明

创建 seed 实例并通过通过 Auth 组件来对指定节点附加权限

<code src="./base-demo.tsx" />

### 反馈方式

无权限时有三种可选的反馈方式：占位节点、气泡框提示、隐藏

<code src="./feedback-type-demo.tsx" />

### 权限组件

为现有组件附加权限控制，生成的权限组件会直接附带权限验证，可用于路由组件等的权限验证

<code src="./with-auth-demo.tsx" />

### useAuth

hooks 式的验证，接受验证参数，返回验证结果

<code src="./use-auth-demo.tsx" />

### 或

类似编程语言中的 `||`，如果需要在两个权限中任意一个通过就通过验证，可以将权限 key 设置为二维数组`['key', ['key2', 'key3']]`·

💡 与常规验证器不同，串联的 `或验证器` 不会在前面的验证器执行失败后阻止后面的同级验证器执行

<code src="./or-demo.tsx" />

### 额外参数

某些验证器会需要接受当前的某些运行时参数作为验证参照（比如验证是否为本人，会需要传入当前用户的信息给验证器），可以通过 extra 传递

<code src="./extra-demo.tsx" />

### 定制反馈节点

<code src="./custom-demo.tsx" />

### 局部验证器

只作用于当前挂载组件的验证器

<code src="./scope-demo.tsx" />

## 底层 api

最基本的底层逻辑在外部包中维护，[@m78/seed](https://github.com/m78-core/seed)，你可以在其文档查看`setState()`, `getState()`, `subscribe()`, `auth()`， 中间件系统等底层 api 的用法

## 中间件

中间件用于增强 api，动态更改初始配置，内置了两个中间件:

- cacheMiddleware
- devtool

```ts
import create, { cacheMiddleware, devtoolMiddleware } from 'm78/seed';

create({
  middleware: [
    // 启用state缓存功能，销毁时将状态存储到session或storage中并在下次进入时还原
    cacheMiddleware('my_auth_deps', 86400000),
    // 开启对redux-devtool的支持，可以通过该浏览器插件来查看当前状态
    devtool,
  ],
});
```

如果要自己编写中间件, 请查看[@m78/seed](https://github.com/m78-core/seed#middleware)

## API

以下所有 api 都包含在 create()创建的 seed 实例对象中

大部分 api 签名都是伪代码，详细说明请直接在开发时点击对应函数/组件查看类型声明文件

### **`<Auth />`**

为包裹的内部节点添加权限验证

```ts | pure
interface AuthProps<D, V> {
  /**
   * 权限验证通过后显示的内容
   * * 当type为tooltip时，必须传入单个子元素，并且保证其能正常接收事件
   * */
  children: React.ReactElement | (() => React.ReactElement);
  /**
   * 待验证的权限key组成的数组
   * * 只要有一个权限未验证通过，后续验证就会被中断，所以key的传入顺序最好按优先级从左到右，如: ['login', 'isVip']
   * * 可以通过二维数组来组合两个条件['key1', ['key2', 'key3']], 组合的条件表示逻辑 `or` */
  keys: AuthKeys<V>;
  /** 'feedback' | 反馈方式，占位节点、隐藏、气泡提示框, 当type为popper时，会自动拦截子元素的onClick事件, 同时，也需要确保子节点符合<Popper />组件的子节点规则 */
  type?: 'feedback' | 'hidden' | 'popper' | AuthTypeEnum;
  /** 传递给验证器的额外参数 */
  extra?: any;
  /**
   * 定制无权限时的反馈样式
   * @param rejectMeta - 未通过的权限的具体信息
   * @param props - 组件接收的原始props
   * @return - 返回用于显示的反馈节点
   * */
  feedback?: (rejectMeta: ValidMeta, props: AuthProps<D, V>) => React.ReactNode;
  /** 是否禁用，禁用时直接显示子节点 */
  disabled?: boolean;
  /** 局部验证器 */
  validators?: Validators<D>;
  /** 自定义显示的403 icon */
  icon?: React.ReactNode;
}
```

### **`withAuth()`**

创建一个权限组件

`conf`参数支持`<Auth />`除`children`外的所有`props`

```ts
(conf: Omit<AuthProps<D, V>, 'children'>) => (Component: React.ComponentType<P>) => React.FC<P>
```

### **`useState()`**

获取`state`

```ts
interface UseState<D> {
  <ScopeDep = any>(
    /**
     * 从deps中选择部分deps并返回，如果省略，会返回整个deps对象
     * - 如果未通过selector选取deps，hook会在每一次deps变更时更新，选取局部deps时只在选取部分变更时更新
     * - 尽量只通过selector返回必要值，以减少hook所在组件的更新次数
     * - 如果选取的依赖值是对象等引用类型值，直接`deps => deps.xxx`返回即可，如果类似`deps => ({ ...deps.xxx })`这样更新引用地址，会造成不必要的更新
     * */
    selector?: (deps: D) => ScopeDep,
    /**
     * 每次deps变更时会简单通过`===`比前后的值，如果相等则不会更新hook，你可以通过此函数来增强对比行为，如使用_.isEqual进行深对比
     * - 如果在selector中正确保留了引用，很少会直接用到此参数
     * - 即使传入了自定义对比函数，依然会先执行 `===` 对比
     * */
    equalFn?: (next: ScopeDep, prev?: ScopeDep) => boolean,
  ): ScopeDep;
}
```

### **`<State />`**

通过`render children`来跟踪`state`并渲染返回的节点

```ts
interface State<D> {
  (props: { children: (deps: D) => React.ReactNode }): React.ReactElement | null;
}
```

### **`useAuth()`**

以 hook 的形式使用`seed.auth()`, 会自动跟踪依赖值和 key 变更

```ts
interface AuthConfig<D> {
  /** 传递给验证器的额外参数 */
  extra?: any;
  /** 局部验证器 */
  validators?: Validators<D>;
}

interface UseAuth<D, V> {
  (
    keys: AuthKeys<V>,
    config?: {
      /** 是否启用 */
      disabled?: boolean;
    } & AuthConfig<D>,
  ): /** 所有未通过验证器返回的ValidMeta，如果为null则表示验证通过 */
  ValidMeta[] | null;
}
```

### **`setState()`**

设置`state`值

```ts
SetState<S & {
  [key: string]: any;
}>
```

### **`getState()`**

获取当前的 `state`

### **`subscribe()`**

订阅 dependency 变更, 返回的函数用于取消改订阅

```ts
type Listener<S extends object = AnyObject> = (changes: Partial<S>) => void;

type Subscribe = (listener: Listener) => () => void;
```

### **`auth()`**

```ts
{
  /**
   * @param authKeys - 所属权限, 如果数组项为数组则表示逻辑 `or`
   * @return [pass, rejects] - 验证结束的回调
   * 回调接收:
   *   * pass 是否通过了所有指定的验证
   *   * rejects 未通过的验证器返回的ValidMeta列表
   * */
  auth(authKeys: AuthKeys<V>): ValidMeta[] | null;
  /**
   * @param authKeys - 所属权限, 如果数组项为数组则表示逻辑 `or`
   * @param config - 配置
   * @param config.extra - 传递给验证器的额外参数
   * @param config.validators - 局部验证器
   * @return [pass, rejects] - 验证结束的回调
   * 回调接收:
   *   * pass 是否通过了所有指定的验证
   *   * rejects 未通过的验证器返回的ValidMeta列表
   * */
  auth(authKeys: AuthKeys<V>, config: AuthConfig<S>): ValidMeta[] | null;
}
```
