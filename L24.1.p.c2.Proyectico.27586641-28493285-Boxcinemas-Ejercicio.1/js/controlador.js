import Cl_mFamilia from "./Familia";

export default class Cl_controlador {
    constructor() {
        this.mCine = new Cl_mCine();
        this.vCliente = new Cl_vCliente(this);
        this.vCine = new Cl_vCine(this);
    }
}