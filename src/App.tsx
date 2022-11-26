import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {InitialStateType} from "./redux/dataReducer";
import {RootStateType} from "./redux/redux";
import {useAppDispatch} from "./hooks/hooks";

function App() {

    const penaltyData: InitialStateType[] = useSelector<RootStateType, InitialStateType[]>(state => state.data)
    const dispatch = useAppDispatch();
    console.log(penaltyData)
    return (
        <div className="App">
            {penaltyData && penaltyData.map((p: InitialStateType) => {
                    return <div>
                        <ul>
                            <li>{p.article}</li>
                            <li>{p.carNumber}</li>
                            <li>{p.description}</li>
                            <li>{p.fineAmount}</li>
                        </ul>
                    </div>
                }
            )}
        </div>
    );
}

export default App;
