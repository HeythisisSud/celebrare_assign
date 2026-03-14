export const initialState = JSON.parse(localStorage.getItem("favourites")) || [];

export function favouritesReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_FAVOURITE":
      let updated;

      if (state.includes(action.payload)) {
        updated = state.filter(id => id !== action.payload);
      } else {
        updated = [...state, action.payload];
      }

      localStorage.setItem("favourites", JSON.stringify(updated));
      return updated;

    default:
      return state;
  }
}
