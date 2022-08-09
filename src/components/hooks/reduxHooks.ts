import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import type { T_ReduxRootState, T_ReduxDispatch } from "../redux/store"

export const useAppDispatch: () => T_ReduxDispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<T_ReduxRootState> = useSelector
