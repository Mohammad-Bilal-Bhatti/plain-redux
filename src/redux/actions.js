export const ADD_POST = "ADD_POST"
export const UPDATE_POST = "UPDATE_POST"
export const DELETE_POST = "DELETE_POST"

export const FETCH_POST_BEGIN = "FETCH_POST_BEGIN"
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS"
export const FETCH_POST_ERROR = "FETCH_POST_ERROR"

export const FETCH_USER_BEGIN = "FETCH_USER_BEGIN"
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS"
export const FETCH_USER_ERROR = "FETCH_USER_ERROR"

export const AUTH_USER_BEGIN = "AUTH_USER_BEGIN"
export const AUTH_USER_SUCCESS = "AUTH_USER_SUCCESS"
export const AUTH_USER_ERROR = "AUTH_USER_ERROR"

export * from "./posts/actions"
export * from "./user/actions"
export * from "./auth/action"