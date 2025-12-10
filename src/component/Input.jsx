import React, { useEffect, useState, useContext } from "react";
import Card from "./Card";
import { TaskContext } from "./TaskContext";

export default function Input() {
  const [alert, setAlert] = useState(false);
  const [alertTxt, setAlertTxt] = useState("");
const values = useContext(TaskContext);
  const [MessageValue, setMessageValue] = useState("");
  const cardMessage = (e) => {
    setMessageValue(e.target.value);
  };
  const [txtCardMessage, settxtCardMessage] = useState("");
  const handleMessage = (e) => {
    if (e.key === "Enter") {
      if (MessageValue.trim() === "") {
        alert("Message cannot be empty!");
        return;
      }
      settxtCardMessage(MessageValue);
      values.setCards([
        ...values.cards,
        { messege: MessageValue, date: new Date() },
      ]);
      setMessageValue("");
      setAlertTxt("You Added Task");
      setAlert(true);
    }
  };
  const filteredCards = values.cards.filter((card) =>
  card.messege.toLowerCase().includes(values.search.toLowerCase())
);

  const [editIndex, setEditIndex] = useState(null);
  const [editTxt, setEditTxt] = useState("");
  const saveCard = () => {
    const updatedCards = filteredCards.map((card, i) => {
      if (i === editIndex) {
        return { ...card, messege: editTxt };
      }
      return card;
    });
    values.setCards(updatedCards);
    setEditIndex(null);
    setEditTxt("");
    setAlertTxt("Text Saved");
    setAlert(true);
  };
  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => setAlert(false), 2000);

      return () => clearTimeout(timer);
    }
  }, [alert]);
  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(values.cards));
  }, [values.cards]);
  return (
    <>
      <div className="input_parent">
        <input
          className={values.dark ? "dark" : ""}
          type="text"
          id="input"
          value={MessageValue}
          onChange={cardMessage}
          onKeyDown={handleMessage}
          placeholder="Start Your Plan"
        />
      </div>
      {alert && (
        <div className={`alert ${values.dark ? "alert_dark" : ""}`}>
          {alertTxt}
        </div>
      )}
      {values.cards.map((item, index) => (
        <Card
          date={item.date}
          dark={values.dark}
          key={index}
          txtCardMessage={item.messege}
          bg={item.bg}
          copied={() => {
            if (navigator.clipboard && window.isSecureContext) {
              navigator.clipboard.writeText(item.messege);
            } else {
              const temp = document.createElement("textarea");
              temp.value = item.messege;
              document.body.appendChild(temp);
              temp.select();
              document.execCommand("copy");
              document.body.removeChild(temp);
            }
            setAlertTxt(`You Copied Task NO:${index + 1}`);
            setAlert(true);
          }}
          delet={() => {
            setAlertTxt(`You Deleted Task NO:${index + 1}`);
            setAlert(true);
            values.setCards(values.cards.filter((_, i) => i !== index));
          }}
          star={() => {
            setAlertTxt("Card Highlighted");
            setAlert(true);
            values.setCards(
              values.cards.map((card, i) => {
                if (i === index) {
                  return {
                    ...card,
                    bg: card.bg === "#71f4bd" ? "white" : "#71f4bd",
                  };
                }
                return card;
              })
            );
          }}
          card={item}
          setEditIndex={setEditIndex}
          editIndex={editIndex}
          currentIndex={index}
          editTxt={editTxt}
          setEditTxt={setEditTxt}
          edit={() => {
            setEditIndex(index);
            setEditTxt(item.messege);
          }}
          saveCard={saveCard}
        />
      ))}
    </>
  );
}
