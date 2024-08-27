export const productsList: Product[] = [
    {
      id: 1,
      producto: "Detergente Líquido",
      precio: 4,
      descripcion: "Detergente líquido para ropa, elimina manchas difíciles y deja un aroma fresco."
    },
    {
      id: 2,
      producto: "Limpiador Multiusos",
      precio: 28.90,
      descripcion: "Limpiador multiusos con aroma a limón, ideal para superficies de cocina y baño."
    },
    {
      id: 3,
      producto: "Desinfectante en Spray",
      precio: 42.30,
      descripcion: "Desinfectante en spray que elimina el 99.9% de los gérmenes y bacterias."
    },
    {
      id: 4,
      producto: "Limpiador de Vidrios",
      precio: 22.00,
      descripcion: "Limpiador para vidrios que deja una superficie sin rayas y con brillo duradero."
    },
    {
      id: 5,
      producto: "Jabón para Platos",
      precio: 15.75
    }
  ]
  

export interface Product {
    id: string | number;
    producto: string;
    precio: number;
    descripcion?: string;
}