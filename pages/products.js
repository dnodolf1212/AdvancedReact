import Products from '../components/Products.js';
import Pagination from '../components/Pagination.js';

export default function OrderPage() {
  return (
    <div>
      <Pagination page={1} />
      <Products />
      <Pagination page={1} />
    </div>)
}