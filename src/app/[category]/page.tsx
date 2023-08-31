
import { Product } from "../utils/types";
import CategoryPage from "./categoryPage";

const Category = ({ params }: { params: { category: string } }) => {
  // const bestSell = [
  //
  // {
  // src:"/1/g-2.jpg",
  // alt:"White T-Shirt",
  // title:"White Printed Tee",
  // description:"Best Quality T-Shirt for man",
  // price: 120,
  // category:"tops",
  // slug: "white-tops"
  // },
  // {
  // src:'/1/g-4.jpg',
  // alt:"White T-Shirt",
  // title:"White Printed Tee",
  // description:"Best Quality T-Shirt for man",
  // price: 150,
  // category:"tops",
  // slug: "black-tops"
  // },
  // {
  // src:'/1/g-5.jpg',
  // alt:"White T-Shirt",
  // title:"White Printed Tee",
  // description:"Best Quality T-Shirt for man",
  // price: 150,
  // category:"tops",
  // slug: "white-tops"
  // },
  // ]
  return <div className="my-[100px]">
    <CategoryPage params={params}/>
  </div>;
};

export default Category;
