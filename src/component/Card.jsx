import React, { useContext } from "react";
import { TaskContext } from "./TaskContext";

export default function Card(props) {
   const values = useContext(TaskContext);
  return (
    <>
   
      <div className={`parent ${values.dark ? "dark_parent" : ""}`} style={{backgroundColor:props.card.bg}}>
        <span
          style={{
            backgroundColor: values.dark ? "#323237" : "",
            color: values.dark?"white":""
          }}
          className="date"
        >
          <strong>Date:</strong>
          {new Date(props.card.date).toLocaleDateString()}{" "}
          <strong>Time:</strong>{" "}
          {new Date(props.card.date).toLocaleTimeString()}
        </span>
        <p id="first_p">{`Task NO: ${props.currentIndex + 1}`}</p>
        {props.editIndex === props.currentIndex ? (
          <input
            type="text"
            className="edit"
            value={props.editTxt}
            onChange={(e) => props.setEditTxt(e.target.value)}
          />
        ) : (
          <p id="massage_p">{props.txtCardMessage}</p>
        )}

        <div className={`first_child ${values.dark ? "darkbtn" : ""}`}>
          <button onClick={props.edit} id="btn">
            &#9998;
          </button>
          <button onClick={props.copied} id="btn">
            &#128209;
          </button>
          <button onClick={props.delet} id="btn">
            &#128465;
          </button>
          <button onClick={props.saveCard} id="btn">
            &#128427;
          </button>
          <button
            onClick={props.star}
            className={props.card.bg === "#71f4bd" ? "btnStar" : ""}
          >
            &#9733;
          </button>
        </div>
      </div>
    </>
  );
}
