import { Object3D } from "three";
declare module "three" {
  interface Object3D {
    matrixNeedsUpdate: boolean;
    eid?: number;
    updateMatrices: (forceLocalUpdate?: boolean, forceWorldUpdate?: boolean, skipParents?: boolean) => void;
  }
}
