const Item = ({name, handlePageChange)} =>
  <li onClick={handlePageChange}>
    {name}
  </li>

// handlePageChange is coupled with what you decide to do
// instead of what really happened
//
// We cannot reuse this kind of callback