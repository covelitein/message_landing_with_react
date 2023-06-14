import { createGlobalState } from "react-hooks-global-state"

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
  AddToursModalOpacity: 'opacity-0',
  AddToursVisibility: 'invisible',
  AddTourModalTranslate:'-translate-y-5'
});

export {
  setGlobalState,
  useGlobalState,
  getGlobalState
}