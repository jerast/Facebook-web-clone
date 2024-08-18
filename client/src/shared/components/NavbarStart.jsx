import FbIcon from '@app/assets/svg/icon.svg?react'
import SearchIcon from '@app/assets/svg/search.svg?react'

export const NavbarStart = () => {
  return (
    <div className="navbar__start">
      <FbIcon className="navbar__icon" />
      <label className="navbar__search">
        <SearchIcon className="navbar__search-icon" />
        <input 
          type="text"
          className="navbar__search-input"
          placeholder="Search Facebook" 
        />
      </label>
    </div>
  )
}
