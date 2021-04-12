import useForm from '../lib/useForm';

export default function CreateProduct() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: "Hot taters",
    price: 1234,
    description: "Ratchet but couturrrr"
  });
  
  return (
    <form>
      <label htmlFor="name">
        Name
        <input 
          type="text" 
          id="name" 
          name="name" 
          placeholder="Name" 
          value={inputs.name}
          onChange={handleChange}
          />
      </label>

      <label htmlFor="price">
        Price
        <input 
          type="number" 
          id="price" 
          name="price" 
          placeholder="Price" 
          value={inputs.price}
          onChange={handleChange}
          />
      </label>

      <button onClick={clearForm}>
        Clear Form
      </button>

      <button onClick={resetForm}>
        Reset Form
      </button>

    </form>
  );
}