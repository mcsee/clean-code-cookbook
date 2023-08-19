const Item = ({name, onItemSelected)} =>
  <li onClick={onItemSelected}>
    {name}
  </li>

// onItemSelected will be called just when an item was selected. KISS
// Parent can decide what to do (or do nothing)
// We defer the decision