import React from 'react'
import './Categories.css';
import img1 from '../../img/cat-1.jpg';
import img2 from '../../img/cat-2.jpg';
import img3 from '../../img/cat-3.jpg';
import img4 from '../../img/cat-4.jpg';








const Categories = () => {

  return (
    <div className='categories container'>
      <h2 className='title'>CATEGORIES</h2>
      <div className="categories-content">
        <div className="category">
          <img src= {img1} alt="" />
          <div>
            <h2>Category Name</h2>
            <p>100 Products</p>
          </div>
        </div>
        <div className="category">
          <img src= {img2} alt="" />
          <div>
            <h2>Category Name</h2>
            <p>100 Products</p>
          </div>
        </div>
        <div className="category">
          <img src= {img3} alt="" />
          <div>
            <h2>Category Name</h2>
            <p>100 Products</p>
          </div>
        </div>
        <div className="category">
          <img src= {img4} alt="" />
          <div>
            <h2>Category Name</h2>
            <p>100 Products</p>
          </div>
        </div>
        <div className="category">
          <img src= {img2} alt="" />
          <div>
            <h2>Category Name</h2>
            <p>100 Products</p>
          </div>
        </div>
        <div className="category">
          <img src= {img1} alt="" />
          <div>
            <h2>Category Name</h2>
            <p>100 Products</p>
          </div>
        </div>
        <div className="category">
          <img src= {img4} alt="" />
          <div>
            <h2>Category Name</h2>
            <p>100 Products</p>
          </div>
        </div>
        <div className="category">
          <img src= {img3} alt="" />
          <div>
            <h2>Category Name</h2>
            <p>100 Products</p>
          </div>
        </div>
        <div className="category">
          <img src= {img3} alt="" />
          <div>
            <h2>Category Name</h2>
            <p>100 Products</p>
          </div>
        </div>
        <div className="category">
          <img src= {img4} alt="" />
          <div>
            <h2>Category Name</h2>
            <p>100 Products</p>
          </div>
        </div>
        <div className="category">
          <img src= {img2} alt="" />
          <div>
            <h2>Category Name</h2>
            <p>100 Products</p>
          </div>
        </div>
        <div className="category">
          <img src= {img1} alt="" />
          <div>
            <h2>Category Name</h2>
            <p>100 Products</p>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Categories
