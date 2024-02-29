import styled from 'styled-components'


function Header() {
  return (
    <section className={styled.header}>
      <div className={styled.header_logo}></div>
      <nav className={styled.header_nav}>
        <ul>
            <li>Main</li>
            <li>Devices</li>
            <li>FPS</li>
            <li>Comfort</li>
            <li>Rooms</li>
            <li>Rules</li>
            <li>Price</li>
            <li>Contacts</li>
        </ul>
      </nav>
    </section>
  );
}

export default Header;
