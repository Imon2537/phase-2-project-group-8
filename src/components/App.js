// home.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Discover from './discover';
import Category from './category';
import Shelf from './shelf';
import Quest from './quest';

const Home = () => {
  return (
    <Router>
      <div style={styles.container}>
        <nav style={styles.nav}>
          <ul style={styles.ul}>
            <li style={styles.li}>
              <Link to="/discover" style={styles.link}>Discover</Link>
            </li>
            <li style={styles.li}>
              <Link to="/category" style={styles.link}>Category</Link>
            </li>
            <li style={styles.li}>
              <Link to="/shelf" style={styles.link}>Shelf</Link>
            </li>
            <li style={styles.li}>
              <Link to="/quest" style={styles.link}>Quest</Link>
            </li>
          </ul>
        </nav>

        <div style={styles.content}>
          <Routes>
            <Route path="/discover" element={<Discover />} />
            <Route path="/category" element={<Category />} />
            <Route path="/shelf" element={<Shelf />} />
            <Route path="/quest" element={<Quest />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  nav: {
    width: '20%',
    backgroundColor: '#f0f0f0',
    padding: '10px',
  },
  ul: {
    listStyleType: 'none',
    padding: 0,
  },
  li: {
    marginBottom: '10px',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
  },
  content: {
    width: '80%',
    padding: '20px',
  },
};

export default Home;
