import './css/Navtab.css';

export default function Navtab({ tab, onClick }) {
  return (
  <button className='nav-button' onClick={() => onClick({tab})}>{tab}</button>
  )
}
