
export type Gastos={
    id:string
    nombreGasto:string
    cantidad:number
    categoria:string
    date:Value

}

export type DraftCantidad= Omit<Gastos,'id'>



type ValuePiece = Date | null;
export type Value = ValuePiece | [ValuePiece, ValuePiece];

export type Category={
    id:string
    name:string
    icon:string
}