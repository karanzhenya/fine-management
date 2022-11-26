import {useDispatch} from "react-redux";
import {AppDispatchType} from "../redux/redux";

export const useAppDispatch = () => useDispatch<AppDispatchType>();