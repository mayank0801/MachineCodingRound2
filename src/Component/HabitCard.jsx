import { BiArchiveIn } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { useContext, useState } from "react";
import { DataContext } from "../context/dataContext";

export default function HabitCard({
  habit,
  setOpen,
  sethabitDetail,
  isArchieve,
  isUpdate,
  setUpdate
}) {
  const { _id, Name, Repeat, Goal, TimeOfDay, StartDate } = habit;
  const { disptach } = useContext(DataContext);
  const [isShowDetail, setShowDetail] = useState(false);

  const editHandler = () => {
    setOpen(true);
    setUpdate(true);
    sethabitDetail({ ...habit });
  };
  return (
    <div
      style={{
        cursor: "pointer",
        width: "300px",
        height: "200px",
        backgroundColor: "#0396B8",
        border: "1px solid black",
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <div>
        <h2
          style={{
            margin: "1rem",
            fontSize: "1rem",
            fontWeight: "800",
            color: "white"
          }}
        >
          {Name}
        </h2>

        <div
          style={{ margin: "-0.9rem 1rem", cursor: "pointer" }}
          onClick={() => setShowDetail(!isShowDetail)}
        >
          {isShowDetail ? "Hide Detail" : "Show Detail"}
          {isShowDetail && (
            <div>
              <p>
                <strong>Repeatation:</strong>
                {Repeat}
              </p>
              <p>
                <strong>Goal:</strong>
                {Goal}
              </p>
              <p>
                <strong>TimeOfDay:</strong>
                {TimeOfDay}
              </p>
              <p>
                <strong>StartDate:</strong>
                {StartDate}
              </p>
            </div>
          )}
        </div>
      </div>

      {!isArchieve && (
        <>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <AiOutlineEdit
              size={30}
              color="white"
              onClick={() => editHandler(habit)}
            />
            <MdDelete
              size={30}
              color="white"
              onClick={() => disptach({ type: "DELETE_HABIT", payload: _id })}
            />
            <BiArchiveIn
              size={30}
              color="white"
              onClick={() =>
                disptach({ type: "ARCHIVE_HABIT", payload: habit })
              }
            />
          </div>
        </>
      )}
    </div>
  );
}
