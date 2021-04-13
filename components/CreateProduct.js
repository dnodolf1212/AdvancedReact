import useForm from '../lib/useForm';
import Form from './styles/Form'

export default function CreateProduct() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    image: '',
    name: "Hot taters",
    price: 1234,
    description: "Ratchet but couturrrr"
  });
  
  return (
    <Form onSubmit={(e) => {
      e.preventDefault();
      console.log(inputs);
    }}>
      <fieldset>
      <label htmlFor="image">
          Image
          <input 
            required
            type="file" 
            id="image" 
            name="image" 
            onChange={handleChange}
            />
        </label>

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

        <label htmlFor="description">
          Description
          <textarea 
            type="text" 
            id="description" 
            name="description" 
            placeholder="Description" 
            value={inputs.description}
            onChange={handleChange}
            />
        </label>

        <button type="submit"> + Add Product</button>
      </fieldset>
    </Form>
  );
}