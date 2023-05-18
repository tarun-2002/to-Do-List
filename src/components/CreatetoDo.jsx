import React, { useState } from "react";

function CreatetoDo(props) {
  const [note, setNote] = useState({
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      content: ""
    });
    event.preventDefault();
  }

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const [isbtnHovering, setbtnIsHovering] = useState(false);
  const handlebtnMouseEnter = () => {
    setbtnIsHovering(true);
  };
  const handlebtnMouseLeave = () => {
    setbtnIsHovering(false);
  };

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal link-1" id="m3-c">
        Add a toDo
      </button>

      {modal && (
        <div
          style={{
            width: "30rem",
            top: "250px",
            transition: ".2s",
            position: "absolute",
            left: "0",
            right: "0",
            marginLeft: "auto",
            marginRight: "auto",
            zIndex: "10",
            height: "15rem",
            padding: "2rem 2rem",
            borderRadius: ".8rem",
            color: "hsl(220, 50%, 90%)",
            background: "linear-gradient(to right, hsl(210, 30%, 20%), hsl(255, 30%, 25%))",
            overflow: "hidden",
            display: "flex"
          }}
        >
          <label
            style={{
              fontSize: "20px",
              position: "absolute",
              color: "#6C6C6C",
              fontWeight: "bold",
              letterSpacing: "1px"
            }}
            htmlFor="task"
          >
            Enter Task toDo
          </label>
          <input
            style={{
              height: "50px",
              width: "30rem",
              backgroundColor: "#1A2226",
              border: "none",
              borderBottom: "2px solid #0DB8DE",
              borderTop: "0px",
              borderRadius: "0px",
              fontWeight: "bold",
              outline: "0",
              marginBottom: "20px",
              paddingLeft: "0px",
              color: "#ECF0F5",
              background: "transparent",
              display: "block",
              margin: "30px auto"
            }}
            id="task"
            name="content"
            onChange={handleChange}
            value={note.content}
          />
          <button
            onMouseEnter={handlebtnMouseEnter}
            onMouseLeave={handlebtnMouseLeave}
            style={{
              display: 'flex',
              backdropFilter: 'blur(5px)',
              position: "absolute",
              margin: "0 30%",
              top: "9rem",
              padding: "1rem 1.6rem",
              border: "1px solid hsla(0, 0%, 100%, .2)",
              borderRadius: "100rem",
              color: "inherit",
              fontSize: "1.4rem",
              fontFamily: "inherit",
              letterSpacing: ".2rem",
              transition: ".2s",
              cursor: "pointer",
              height: "70px",
              background: isbtnHovering ? 'hsl(210, 90%, 50%)' : "transparent",
              borderColor: isbtnHovering ? 'hsl(210, 90%, 50%)' : null,
              transform: isbtnHovering ? "translateY(-.2rem)" : "translateY(-.1rem)"
            }}
            onClick={submitNote}
          >
            Add &rarr;
          </button>
          <a
            style={{
              width: "2.2rem",
              textDecoration: "none",
              height: "2.2rem",
              border: "1px solid var(--border-color)",
              borderRadius: "100rem",
              color: "inherit",
              fontSize: "1.5rem",
              position: "absolute",
              top: "2rem",
              right: "2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              transition: ".2s",
              zIndex: "100",
              cursor: "pointer",
              background: isHovering ? 'hsl(210, 90%, 50%)' : null,
              borderColor: isHovering ? 'hsl(210, 90%, 50%)' : null,
              transform: isHovering ? "translateY(-.2rem)" : "translateY(-.1rem)"
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={toggleModal}
          >
            -
          </a>
        </div>
      )}
    </>
  );
}

export default CreatetoDo;
