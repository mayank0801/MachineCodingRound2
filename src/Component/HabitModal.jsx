import { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { FaQuestion } from "react-icons/fa";
import { DataContext } from "../context/dataContext";
import "./HabitModal.css";
export default function HabitModal({
  setOpen,
  sethabitDetail,
  habitdetail,
  isUpdate,
  setUpdate
}) {
  const { disptach } = useContext(DataContext);
  // console.log(disptach);

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    const { name, value } = e.target;
    sethabitDetail({ ...habitdetail, [name]: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    isUpdate
      ? disptach({
          type: "UPDATE_HABIT",
          payload: { _id: uuid(), ...habitdetail }
        })
      : disptach({
          type: "ADD_HABIT",
          payload: { _id: uuid(), ...habitdetail }
        });

    sethabitDetail({
      Name: "",
      Repeat: "Daily",
      Goal: "1 times Daily",
      TimeOfDay: "Any Time",
      StartDate: "Today"
    });
    setOpen(false);
    setUpdate(false);
  };

  return (
    <div className="conatiner">
      <div className="container-center">
        <div>
          <h3>New Habit</h3>
          <h1>New Habit</h1>
        </div>
        <form onSubmit={submitHandler}>
          <div className="habit-name">
            <label className="habit-title">
              Name:
              <div className="habit-input">
                <FaQuestion className="habit-name-icon" />
                <input
                  type="text"
                  name="Name"
                  value={habitdetail.Name}
                  onChange={(e) => handleChange(e)}
                  placeholder="Enter Habit Title"
                  required
                />
              </div>
            </label>
          </div>

          <div style={{ display: "flex ", flexWrap: "wrap" }}>
            <div
              style={{ display: "flex", flexDirection: "column", width: "50%" }}
            >
              <label for="habit-Repaet">Repeat:</label>
              <select
                name="Repeat"
                id="habitRepeat"
                onChange={(e) => handleChange(e)}
              >
                <option value="Daily">Daily</option>
                <option value="Weekend">Weekend</option>
              </select>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", width: "50%" }}
            >
              <label for="habit-goal">Goal:</label>
              <select name="Goal" id="habitgoal" onChange={handleChange}>
                <option value="1 times Daily">1 times Daily</option>
                <option value="2 times Daily">2 times Daily</option>
              </select>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", width: "50%" }}
            >
              <label for="habit-Time">TimeOfDay:</label>
              <select name="TimeOfDay" id="habitTime" onChange={handleChange}>
                <option value="AnyTime">AnyTime</option>

                <option value="Morning">Morning</option>
                <option value="AfterNoon">AfterNoon</option>
                <option value="Evening">Evening</option>
                <option value="Night">Night</option>
              </select>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", width: "50%" }}
            >
              <label for="habit-startDta">Start Date:</label>
              <select
                name="StartDate"
                id="habitstartdate"
                onChange={handleChange}
              >
                <option value="Today">Today</option>
                <option value="Tommorow">Tommorow</option>
              </select>
            </div>
          </div>

          <div
            style={{
              textAlign: "right",
              marginTop: "1rem"
            }}
          >
            <button className="btn-discard" onClick={() => setOpen(false)}>
              Discard
            </button>
            <button className="btn-save" type="submit" value="submit">
              {isUpdate ? "Update" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
