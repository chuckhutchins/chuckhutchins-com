import bookList from '@/assets/data/book-list.json';
import coffeeList from '@/assets/data/coffee-list.json';

export default {
  getBookList() {
    return bookList.books;
  },
  getCoffeeList() {
    return coffeeList.coffee;
  },
};