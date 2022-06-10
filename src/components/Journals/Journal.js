import { FaTimes } from "react-icons/fa";
import "../../collapse.css"
const Journal = ({ journal, onDelete}) => {
  return (
    <div
      className={`journal ${journal.reminder ? "reminder" : ""}`}
      // onDoubleClick={() => onToggle(journal.id)}
    >
      <li class="border-gray-400 flex flex-row mb-2">
        <div className="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 flex-row justify-between items-center p-3">
          <div tabindex="0" className={`my-collapse w-3/5 rounded-box absolute p-1 ${journal.content ? "my-collapse-arrow" : ""}`}>
            {journal.content && <input type="checkbox" /> }
            <div className="my-collapse-title font-medium dark:text-white">{journal.title}</div>
            <div className={`${journal.content ?" my-collapse-content" : ""}`}><p>{journal.content}</p></div>
          </div>
          <div className="flex flex-row">
          <div className="text-gray-600  :text-gray-200 text-xs mr-8 ">
            {journal.date}
          </div>
          <FaTimes
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => onDelete(journal.id)}
          />
          </div>
        </div>
      </li>
    </div>
  );
};

export default Journal;
