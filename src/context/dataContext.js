import { createContext, useReducer } from "react";

export const DataContext = createContext();

export default function DataContextProvider({ children }) {
  const initialState = {
    habits: [
      {
        _id: "d42e2e0b-4471-46ee-81b0-3185b8aa3aa5",
        Name: "Meditate",
        Repeat: "Daily",
        Goal: "1 times Daily",
        TimeOfDay: "Any Time",
        StartDate: "Today"
      },
      {
        _id: "0203cb00-2d91-4724-b0fe-8915f26fa89d",
        Name: "Set a To-Do-List",
        Repeat: "Daily",
        Goal: "1 times Daily",
        TimeOfDay: "Any Time",
        StartDate: "Today"
      },
      {
        _id: "44d0dfec-9fcb-4dee-9c9b-9b63d603ecbf",
        Name: "Play Game",
        Repeat: "Weekend",
        Goal: "1 times Daily",
        TimeOfDay: "AfterNoon",
        StartDate: "Today"
      }
    ],
    archive: []
  };

  function reducer(state, action) {
    switch (action.type) {
      case "ADD_HABIT":
        return { ...state, habits: [...state.habits, action.payload] };
      case "DELETE_HABIT":
        console.log("here");
        return {
          ...state,
          habits: state.habits.filter(({ _id }) => _id !== action.payload)
        };

      case "UPDATE_HABIT":
        return {
          ...state,
          habits: state.habits.map((habit) =>
            habit._id === action.payload._id
              ? { ...action.payload }
              : { ...habit }
          )
        };
      case "ARCHIVE_HABIT":
        return {
          ...state,
          archive: [...state.archive, action.payload],
          habits: state.habits.filter(({ _id }) => _id !== action.payload._id)
        };
      default:
        return { ...state };
    }
  }

  const [state, disptach] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{ state, disptach }}>
      {children}
    </DataContext.Provider>
  );
}
