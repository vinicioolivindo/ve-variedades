import Button from "./Button";

// eslint-disable-next-line react/prop-types
const ProductExpand = ({image, tam}) => {
    return (
        <div className="max-w-sm bg-silver p-4 rounded-xl text-D_Gray m-4 mb-10">
          <img className="w-32 h-32"
                  src={image}
                  alt=""/>
    
        <p>{tam}</p>
          <Button color={"bg-primaryColor"}>Entendido</Button>
        </div>
      )
}

export default ProductExpand;