import { React } from "react";
import "../../assets/board.css";
import { useSelector } from "react-redux";
import { Lists } from "./Lists";


export const Board = ({isHide}) => {

  const dark = useSelector(store => store.themeState);

  return (
      <section className={isHide ? "main mt-5 board-sidebar-hide" :"main mt-5"}>
        <section className="board-content">
          <Lists isDark={dark[1]} />
        </section>
      </section>
  );
};
