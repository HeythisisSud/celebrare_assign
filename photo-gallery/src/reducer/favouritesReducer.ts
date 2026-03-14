type Action =
  | { type: "TOGGLE_FAVOURITE"; payload: string }

export const initialState: string[] =
  JSON.parse(localStorage.getItem("favourites") || "[]")

export function favouritesReducer(
  state: string[],
  action: Action
): string[] {

  switch (action.type) {

    case "TOGGLE_FAVOURITE":

      let updated: string[]

      if (state.includes(action.payload)) {
        updated = state.filter(id => id !== action.payload)
      } else {
        updated = [...state, action.payload]
      }

      localStorage.setItem("favourites", JSON.stringify(updated))

      return updated

    default:
      return state
  }
}
