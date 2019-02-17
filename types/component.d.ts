declare namespace tinyapp {
  interface IComponentLifeCycleMethods {
    didMount?(): void;
    didUpdate?(): void;
    didUnmount?(): void;
  }

  interface IComponentMethods {
    [name: string]: () => void;
  }

  interface IComponentInstance<P, D> {
    data: D;
    props: P;
    setData: SetDataMethod<D>;
  }

  type ComponentOption<P extends Record<string, any>, D extends any, M extends IComponentMethods> = IComponentLifeCycleMethods
    & {
      mixins?: Array<ComponentOption<any, any, any>>;
      data?: D;
      props?: P;
      methods?: M & ThisType<IComponentInstance<P, D> & M>;
    }
    & ThisType<IComponentInstance<P, D> & M>;
}

declare function Component(option: tinyapp.ComponentOption<Record<string, any>, any, tinyapp.IComponentMethods>): void;
