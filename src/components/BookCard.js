// Modify BookCard component to accept a link
import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ title, author, image }) => {
  return (
    <Link to={`/book/${title}`} style={styles.link}>
      <div style={styles.card}>
        <img src={image} alt={title} style={styles.image} />
        <div style={styles.info}>
          <h3 style={styles.title}>{title}</h3>
          <p style={styles.author}>{author}</p>
        </div>
      </div>
    </Link>
  );
};

const styles = {
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ddd',
    padding: '10px',
    borderRadius: '30px',
    backgroundColor: 'rgba(249, 249, 249, 0.3)',
    maxWidth: '100%',
    boxSizing: 'border-box',
    overflow: 'hidden',
  },
  image: {
    width: '150px',
    height: 'auto',
    marginRight: '20px',
    flexShrink: 0,
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
    marginTop: '5px',
  },
};

export default BookCard;

