# Book search app with Google Books API on React
## Hosted project
#### https://main--astonishing-jelly-cf330a.netlify.app/

## Functionality
- Search field. The search trigger is either pressing Enter (when the text field has focus) or pressing the search button.
- Filter by category. Select with categories: all, art, biography, computers, history, medical, poetry. If "all" (selected initially) is selected, the search is performed in all categories.
- Sorting. Select with sorting options: relevance (selected initially), newest.
- Cards of books, each consists of a book cover image, book title, category name, and author names. If more than one category comes for a book, only the first one is displayed. All authors are displayed.
- Above the block with cards, the number of books found is displayed.
- Pagination is implemented according to the 'load more' principle. Below the block with cards is the 'Load more' button, by clicking on it, more books are loaded to the already loaded books. Pagination step - 30.
- When you click on a card, you go to the detailed page of the book, which displays its data: cover image, title, all categories, all authors, description.