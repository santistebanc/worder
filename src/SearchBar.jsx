import { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex">
        <input
          type="text"
          placeholder="🔎︎"
          class="input input-bordered rounded-none flex-1 focus:outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <input className="btn rounded-none" type="submit" value="Search" />
      </div>
    </form>
  );
}

export default SearchBar;
