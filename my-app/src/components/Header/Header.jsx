/** @format */

import Button from "../Button/Button";
const Header = () => {
  return (
    <header>
      <Button titel={"Январь"} onClikFn={() => console.log("Январь")} />
      <Button titel={"Февраль"} onClikFn={() => console.log("Февраль")} />
      <Button titel={"Март"} onClikFn={() => console.log("Март")} />
      <Button titel={"Апрель"} onClikFn={() => console.log("Апрель")} />
    </header>
  );
};

export default Header;
