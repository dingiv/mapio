export function jsx(tag: string, props: any, key: string) {
   return { tag, props, key };
}

export function jsxs(tag: string, props: any, key: string) {
   return { tag, props, key, isFragment: false };
}

export function Fragment(props: any) {
   return props.children;
}


export namespace JSX {
   class ElementDiv {
      // ...
   }

   export interface Element {
      tag: string;
      props: any;
      key: string;
      isFragment?: boolean;
   }

   export interface IntrinsicElements {
      div: ElementDiv;

      [elemName: string]: any;
   }

   export interface ElementChildrenAttribute {

   }

   export interface ElementClass {

   }



}