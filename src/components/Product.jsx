import Button from "./Button";
import {MdDelete} from 'react-icons/md'
import {MdEdit} from 'react-icons/md'
import {MdOutlineAddShoppingCart} from 'react-icons/md'

export default function Product({ id, name, image, price,kategori, setEditedProduct,products, setProducts}) {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <section>
        <h2>{name}</h2>
        <p>
          {price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0,
          })}({kategori})
        </p>
        <div>
            <Button><MdOutlineAddShoppingCart size={24}/></Button>
          <Button
            variant="tonal"
            onClick={() =>
              setEditedProduct({
                id,
                name,
                image,
                price,
                kategori,
              })
            }
            title="Edit"
          >
            <MdEdit size={24}/>
          </Button>
          <Button variant="tonal" onClick={() =>
                      confirm(`Apakah Anda yakin ingin menghapus?`) &&
                      setProducts(products.filter((p) => p.id !== id))
                    }
                    title="Hapus"><MdDelete size={24}/></Button>
        </div>
      </section>
    </div>
  );
}
