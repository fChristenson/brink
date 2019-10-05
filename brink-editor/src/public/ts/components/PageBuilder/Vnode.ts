export interface IVnode {
  id: string;
  name: string;
  props: any;
  children: Array<IVnode | string>;
}

export const Vnode = (
  name: string,
  props?: any,
  children?: Array<IVnode | string>,
  id?: string
): IVnode => {
  return {
    id: id || Math.random().toString(),
    name,
    props: props || {},
    children: children || []
  };
};
