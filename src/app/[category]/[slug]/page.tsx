import SlugPage from "./slugPage";

const Slug = ({params}:{params:{slug:string}}) => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <SlugPage params={params} />
      </section>
    </div>
  );
};

export default Slug;
