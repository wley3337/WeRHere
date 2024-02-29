import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"

import { dialysisClinicsApi } from "src/Data/apis/health/dialysisClinics/dialysisClinics"
import { servicesApi } from "src/Data/apis/services/services"
import { shelterApi } from "src/Data/apis/shelters/shelters"

export const store = configureStore({
  reducer: {
    [dialysisClinicsApi.reducerPath]: dialysisClinicsApi.reducer,
    [servicesApi.reducerPath]: servicesApi.reducer,
    [shelterApi.reducerPath]: shelterApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      dialysisClinicsApi.middleware,
      servicesApi.middleware,
      shelterApi.middleware,
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
