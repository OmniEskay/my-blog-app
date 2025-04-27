import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import './App.css'; 

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
           <Route path="*" element={ 
             <div className="container"><h2>404 - Page Not Found</h2></div>
           } />
        </Routes>
      </main>
    </div>
  );
}

export default App;