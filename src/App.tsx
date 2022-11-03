import { motion } from "framer-motion";
import { useRef } from "react";
import "./App.css";

const menus = ["메뉴1", "메뉴2", "메뉴3", "메뉴4", "메뉴5", "메뉴6", "메뉴7"];

function App() {
  const constraintsRef = useRef(null);
  return (
    <div className="example-container">
      <motion.div className="drag-area" ref={constraintsRef} />
      <motion.div
        className="drag-item"
        drag="x"
        dragConstraints={constraintsRef}
      >
        <ul>
          {menus.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default App;
