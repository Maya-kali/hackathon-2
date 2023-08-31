"use client";
import CartCard from "@/components/cartCard";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "../store/hooks";

const CartPage = () => {
  const cartArray = useAppSelector((state) => state.cart);
  const total = cartArray.reduce((total, arr) => {
    return total + (arr.price - (arr.price * arr.discount) / 100) * arr.qty;
  }, 0);
  return (
    <div>
      
      <div className="grid lg:grid-cols-3 grid-cols-1 px-5">
        {/* items */}
        <div className="col-span-2">
          {/* <CartCard src="/1/m-2.jpg" title="Ladies coat" size="L" price={1500}/> */}
          <CartCard />
        </div>
        {/* summary */}
        <div className="bg-gray-800/5 p-5 rounded-xl">
          {/* heading */}
          <h2 className="capitalize">order summary</h2>
          {/* divider */}
          <div className="divider mb-1 mt-0"></div>
          {/* pricing */}
          <div className="text-gray-900">
            {/* product price */}
            <div className="flex items-center justify-between capitalize">
              <h2>sub total</h2>
              <h2>${total}</h2>
            </div>
            {/* delivery charges */}
            <div className="flex items-center justify-between capitalize">
              <h2>delivery charges</h2>
              <h2>TBD</h2>
            </div>
            {/* service charges */}
            <div className="flex items-center justify-between capitalize">
              <h2>Sales tax</h2>
              <h2>TBD</h2>
            </div>
          </div>
          {/* divider */}
          <div className="divider mb-1 mt-0"></div>
          {/* estimated total */}
          <div className="flex items-center justify-between font-semibold capitalize">
            <h2>estimated total</h2>
            <h2>$ {total}</h2>
          </div>
          {/* divider */}
          <div className="divider mb-1 mt-0"></div>
          {/* checkout button */}
          <div className="flex items-center justify-center w-full">
            <Button
              className="bg-gray-900 hover:bg-transparent 
        rounded-xl duration-300 text-white hover:text-black shadow-md capitalize"
            >
              proceed to checkout
            </Button>
          </div>
          {/* divider */}
          <div className="divider mb-1 mt-0"></div>
          {/* note */}
          <p className="text-xs font-semibold w-[97%] text-center capitalize italic">
            {`* delivery charges and the sales tax will be  calculated in the checkout page.`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
