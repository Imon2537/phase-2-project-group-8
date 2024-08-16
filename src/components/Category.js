import React from 'react';
import Genre from './Genre';

const Category = () => {
  const genres = [
    {
      genre: 'Fantasy',
      books: [
        { title: 'Tess in the Road', author: 'Rachel Hartman', image: 'https://i.pinimg.com/236x/6e/e9/5d/6ee95def82d4f92fcc2f949b439146f1.jpg' },
        { title: 'Roar', author: 'Cora Carmack', image: 'https://i.pinimg.com/236x/c1/5d/b7/c15db7bdf7552fee71c4c977c215f40e.jpg' },
        { title: 'The Crescent Stone', author: 'Matt Mikalatos', image: 'https://i.pinimg.com/236x/4b/22/c5/4b22c5e71245ccbd08102dd52a6389c3.jpg' },
        { title: 'Spin the Dawn', author: 'Elizabeth Lim', image: 'https://i.pinimg.com/236x/c4/6d/17/c46d1786b4fb37e223e40c430c53949e.jpg' },
      ],
    },
    {
      genre: 'Thriller',
      books: [
        { title: 'Cold Dark Places', author: 'Kylie Brant', image: 'https://i.pinimg.com/236x/ee/45/77/ee457705db59e5c8511bff29b72187ad.jpg' },
        { title: 'The Night Trade', author: 'Barry Eisler', image: 'https://i.pinimg.com/236x/02/ef/f2/02eff2cdd8dc37a91e205d27a9273930.jpg' },
        { title: 'The Killer Collective', author: 'Barry Eisler', image: 'https://i.pinimg.com/236x/07/15/51/07155158d42c50382913394806528c7d.jpg' },
        { title: 'The Russian', author: 'Ben Coes', image: 'https://i.pinimg.com/236x/02/19/ce/0219ceea53d50cbe3d898139b277aa0c.jpg' },
      ],
    },
    {
      genre: 'Mystery',
      books: [
        { title: 'Brute Force', author: 'Marc Cameron', image: 'https://i.pinimg.com/236x/2e/94/9b/2e949bc843b4a5154dd599c6a189241f.jpg' },
        { title: 'The Denali Deception', author: 'Earnest Dempsey', image: 'https://i.pinimg.com/236x/13/4c/7c/134c7c5cfd039d66b355ac86f9192a37.jpg' },
        { title: 'State of Emergency', author: 'Marc Cameron', image: 'https://i.pinimg.com/236x/79/c8/15/79c815ad46ba792b056e0c42cde82427.jpg' },
        { title: 'Electing to Murder', author: 'Roger Stelljes', image: 'https://i.pinimg.com/236x/fc/24/23/fc24239ad7a9c0ec63807b3b52da1324.jpg' },
      ],
    },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.mainContent}>
        <h1>genre</h1>
        {genres.map((genre) => (
          <Genre key={genre.genre} genre={genre.genre} books={genre.books} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
  },
  mainContent: {
    flex: 1,
    padding: '20px',
    backgroundColor: 'white',
  },
};

export default Category;
