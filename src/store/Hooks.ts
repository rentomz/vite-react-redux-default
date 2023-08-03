import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootStore, AppDispatch } from './Store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector