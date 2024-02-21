import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { servicesApi } from "src/Data/apis/services/services"
import { shelterApi } from "src/Data/apis/shelters/shelters"
//import counterReducer from "../features/counter/counterSlice"

export const store = configureStore({
  reducer: {
    [shelterApi.reducerPath]: shelterApi.reducer,
    [servicesApi.reducerPath]: servicesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      shelterApi.middleware,
      servicesApi.middleware,
    ),
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
