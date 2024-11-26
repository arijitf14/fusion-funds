/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { configureStore } from "@reduxjs/toolkit"
import logger from "redux-logger"
import persistStore from "redux-persist/es/persistStore"
import { isBuildMode } from "@utils/Utils"

import persistedReducer, { options } from "./persist"

const store = configureStore({
  reducer: persistedReducer,
  devTools: !isBuildMode,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware()

  middleware: (getDefaultMiddleware) =>
    isBuildMode
      ? getDefaultMiddleware(options)
      : getDefaultMiddleware(options).concat(logger),
})

export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
