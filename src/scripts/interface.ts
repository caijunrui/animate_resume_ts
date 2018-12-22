// 加载项
export interface LoadParams {
  load: string
  type: 'css' | 'md'
  id:string
  rewrite?: boolean
}

// 实例化传入参数
export interface CoreOptions {
  content: Array<LoadParams>
}

// 实例化
export interface Core {
  animate: () => void
  skip: () => void
}

export interface StyleParams {
  el: Element
  content: string
}

