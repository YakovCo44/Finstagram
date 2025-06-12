import { useState } from 'react'
import { FiX } from "react-icons/fi"
import finstagramIcon from '../assets/img/finstagram-icon.png'

export function SearchModal({ onClose }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [recentSearches, setRecentSearches] = useState(['batman', 'bruce', 'joker']) // demo

  function handleClearAll() {
    setRecentSearches([])
  }

  function handleRemoveRecent(term) {
    setRecentSearches(recentSearches.filter(t => t !== term))
  }

  return (
    <>
      {/* BACKDROP */}
      <div className="search-modal__backdrop" onClick={onClose} />
      {/* MODAL */}
      <div className="search-modal open" onClick={onClose}>
        <div className="search-modal__content" onClick={e => e.stopPropagation()}>
          <div className="search-modal__headline">Search</div>
          <div className="search-bar">
            <input
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Search"
              autoFocus
            />
            {isLoading && <span className="spinner" />}
          </div>
          <div className="search-modal__divider"></div>
          <div className="recent-searches">
            <div className="header">
              <span>Recent</span>
              <button onClick={handleClearAll}>Clear all</button>
            </div>
            <ul>
              {recentSearches.map(term => (
                <li key={term}>
                  {term}
                  <FiX onClick={() => handleRemoveRecent(term)} />
                </li>
              ))}
            </ul>
          </div>
          {/* Results area or "No results found" */}
        </div>
      </div>
    </>
  )
}
