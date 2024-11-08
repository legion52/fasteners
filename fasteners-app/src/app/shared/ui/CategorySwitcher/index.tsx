'use client'
import React, { useState } from 'react';
import styles from './categorySwitcher.module.css';

interface CategorySwitcherProps {
  categories: string[];
  onCategoryChange: (category: string) => void;
}

const CategorySwitcher: React.FC<CategorySwitcherProps> = ({ categories, onCategoryChange }) => {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className={styles.categorySwitcher}>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`${styles.categoryButton} ${activeCategory === category ? styles.active : ''}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategorySwitcher;
