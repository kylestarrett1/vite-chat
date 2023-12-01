import { useState, useEffect } from 'react';

const Sidebar = (props) => {
  return (
    <section className="sidebar">
      <h2>Sidebar</h2>
      <ul>
        <li>List Item 1</li>
        <li>List Item 2</li>
        <li>List Item 3</li>
        <li>List Item 4</li>
        {/* Add more navigation links as needed */}
      </ul>
    </section>
  );
};

export default Sidebar;
