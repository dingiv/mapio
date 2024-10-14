import { Box, BoxConstructor } from "./box"
import { MapioElement } from "../element/builtin"
import { Store } from "../store"

export interface ClientHandle extends Box {

}

export const createClientHandle = (Box: BoxConstructor, store: Store, element: MapioElement) => {
   const box = new Box({})
   

   return box as ClientHandle
}