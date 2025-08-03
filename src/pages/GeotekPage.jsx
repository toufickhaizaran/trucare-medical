import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

function GeotekProducts() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('az');
  const [selectedSection, setSelectedSection] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'geotek-products')); // ✅ Your actual collection name
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(data);
      } catch (error) {
        console.error('Error fetching Geotek products:', error);
      }
    };

    fetchData();
  }, []);

  // 🔍 Search Logic Across All Fields
  const filteredProducts = products.filter(product => {
    const term = searchTerm.toLowerCase();

    const combined = `
      ${product.name || ''}
      ${product.code || ''}
      ${product.section || ''}
      ${product.description || ''}
      ${product.packaging || ''}
      ${(product.variations || []).map(v => `${v.code || ''} ${v.size || ''}`).join(' ')}
    `.toLowerCase();

    return combined.includes(term);
  });

  // 🔠 Sort + 🔽 Section Filter
  const sortedFilteredProducts = filteredProducts
    .filter(product =>
      selectedSection
        ? product.section?.toLowerCase() === selectedSection.toLowerCase()
        : true
    )
    .sort((a, b) => {
      if (sortOrder === 'az') return a.name.localeCompare(b.name);
      if (sortOrder === 'za') return b.name.localeCompare(a.name);
      return 0;
    });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Geotek Products</h1>

      {/* 🔧 Search + Sort + Filter */}
      <div className="mb-6 flex flex-col md:flex-row gap-4 items-start md:items-center">
        <input
          type="text"
          placeholder="Search by any keyword..."
          className="border px-4 py-2 rounded w-full md:w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="border px-4 py-2 rounded"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="az">Sort A → Z</option>
          <option value="za">Sort Z → A</option>
        </select>

        <select
          className="border px-4 py-2 rounded"
          value={selectedSection}
          onChange={(e) => setSelectedSection(e.target.value)}
        >
          <option value="">All Sections</option>
          <option value="ENT">ENT</option>
          <option value="OR">OR</option>
          <option value="Dental">Dental</option>
          <option value="General">General</option>
          {/* Add more as needed */}
        </select>
      </div>

      {/* ✅ Products List */}
      {sortedFilteredProducts.map(product => (
        <div key={product.id} className="border p-4 rounded shadow mb-4">
          <p><strong>Name:</strong> {product.name}</p>
          <p><strong>Code:</strong> {product.code}</p>
          <p><strong>Section:</strong> {product.section}</p>
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Packaging:</strong> {product.packaging}</p>

          {product.variations?.length > 0 && (
            <>
              <p><strong>Variations:</strong></p>
              <ul className="list-disc ml-5">
                {product.variations.map((v, i) => (
                  <li key={i}>
                    <strong>Code:</strong> {v.code}, <strong>Size:</strong> {v.size}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      ))}

      {sortedFilteredProducts.length === 0 && (
        <p className="text-gray-500">No matching products found.</p>
      )}
    </div>
  );
}

export default GeotekProducts;
