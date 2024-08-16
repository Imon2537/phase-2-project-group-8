import React from 'react';

const BookCard = ({ title, author, image }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.image} />
      <div style={styles.info}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.author}>{author}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ddd',
    padding: '10px',
    borderRadius: '30px',
    backgroundColor: 'rgba(249, 249, 249, 0.3)',
    maxWidth: '100%', // Ensure the container doesn't exceed the viewport width
    boxSizing: 'border-box', // Include padding and border in width/height
    overflow: 'hidden', // Prevent content overflow

  },
  image: {
    width: '150px', // Fixed width for the image
    height: 'auto', // Maintain aspect ratio
    marginRight: '20px', // Space between image and details
    flexShrink: 0, // Prevent image from shrinking
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: '14px',
    fontWeight: 'bold',
    margin: '0',

  },
  author: {
    fontSize: '12px',
    color: '#555',
    marginTop: '5px'
  },
};

export default BookCard;

