export function jsxDEV(tag: string, props: any, key: string) {
   return { tag, props, key }
}

export function jsxsDEV(tag: string, props: any, key: string) {
   return { tag, props, key }

}

export function FragmentDEV(props: any) {
   return { tag: 'Fragment', props, isFragment: true }
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