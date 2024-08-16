import React, { useState, useEffect } from 'react';
import Genre from './Genre';
import Sidebar from './Sidebar';

const Category = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const apiKey = 'your_nytimes_api_key';
        const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${genre}.json?api-key=${apiKey}`);
        const data = await response.json();
        
        // Group books by genre
        const groupedBooks = data.reduce((acc, book) => {
          const genre = book.genre || 'Unknown'; // Handle cases where genre might be undefined
          if (!acc[genre]) {
            acc[genre] = [];
          }
          acc[genre].push({
            title: book.title,
            author: book.author,
            image: book.cover || 'https://via.placeholder.com/150', // Fallback image
          });
          return acc;
        }, {});

        // Convert object to array of genre objects
        const genreArray = Object.keys(groupedBooks).map((genre) => ({
          genre,
          books: groupedBooks[genre],
        }));

        setGenres(genreArray);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div style={styles.container}>
      <Sidebar />
      <div style={styles.mainContent}>
        <h1>Genres</h1>
        {genres.length > 0 ? (
          genres.map((genre) => (
            <Genre key={genre.genre} genre={genre.genre} books={genre.books} />
          ))
        ) : (
          <p>Loading books...</p>
        )}
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
    backgroundColor: '#fde6a2',
  },
};

export default Category;
