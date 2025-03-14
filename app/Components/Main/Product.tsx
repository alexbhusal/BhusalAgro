import { ProductsCard } from './Products'

export const Product = () => {
  return (
    <>
      <div className="flex justify-center items-center">
            <h1 className="text-center font-semibold text-3xl m-5">
              Available Products
            </h1>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-12 m-5">
            <ProductsCard />
          </div>
    </>
  )
}


