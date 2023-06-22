import { useContext } from "react";
import HabitCard from "../Component/HabitCard";
import { DataContext } from "../context/dataContext";

export default function ArchivePage() {
  const {
    state: { archive }
  } = useContext(DataContext);
  console.log(archive.length);
  console.log("Hii");
  return (
    <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "1rem" }}>
      {archive.length === 0 && <h1>No Archive Found</h1>}
      {archive.map((habit) => (
        <HabitCard key={habit._id} habit={habit} isArchieve={true} />
      ))}
    </div>
  );
}
