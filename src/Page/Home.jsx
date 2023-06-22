import { useContext, useState } from "react";
import HabitCard from "../Component/HabitCard";
import HabitModal from "../Component/HabitModal";
import { DataContext } from "../context/dataContext";

export default function Home() {
  const [isopen, setOpen] = useState(false);
  const [isUpdate, setUpdate] = useState(false);
  const {
    state: { habits }
  } = useContext(DataContext);

  const [habitdetail, sethabitDetail] = useState({
    Name: "",
    Repeat: "Daily",
    Goal: "1 times Daily",
    TimeOfDay: "Any Time",
    StartDate: "Today"
  });

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          filter: isopen && "blur(4px)"
        }}
        onClick={() => (isopen ? setOpen(false) : "")}
      >
        <div
          style={{
            cursor: "pointer",
            width: "300px",
            height: "200px",
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
          }}
          onClick={() => setOpen(true)}
        >
          <div
            style={{
              display: "flex"
            }}
          >
            <p
              style={{
                margin: "5rem",
                fontSize: "1rem",
                width: "100%",
                fontWeight: "800"
              }}
            >
              Create My Own
            </p>
          </div>
        </div>

        {habits.map((habit) => (
          <HabitCard
            key={habit._id}
            habit={habit}
            setOpen={setOpen}
            sethabitDetail={sethabitDetail}
            habitdetail={habitdetail}
            isUpdate={isUpdate}
            setUpdate={setUpdate}
          />
        ))}
      </div>
      <div style={{ position: "absolute", top: "30%", left: "30%" }}>
        {isopen && (
          <HabitModal
            setOpen={setOpen}
            sethabitDetail={sethabitDetail}
            habitdetail={habitdetail}
            isUpdate={isUpdate}
            setUpdate={setUpdate}
          />
        )}
      </div>
    </>
  );
}
