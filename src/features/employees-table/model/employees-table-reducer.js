import {getEmployees} from "../../../api/api";

const EMPL_TABLE_TOGGLE_IS_FETCHING = "emplTableToggleIsFetching";
const EMPL_TABLE_SET_EMPLOYEES = "emplTableSetEmployees";
const EMPL_TABLE_RESET = "emplTableReset";

const emplTableToggleIsFetching = (isFetching) => ({
    type: EMPL_TABLE_TOGGLE_IS_FETCHING,
    isFetching
})
const emplTableSetEmployees = (data) => ({
    type: EMPL_TABLE_SET_EMPLOYEES,
    data
})
export const emplTableReset = () => ({
    type: EMPL_TABLE_RESET,
})

export const getEmployeesData = () => async (dispatch) => {
    dispatch(emplTableToggleIsFetching(true));
    const data = await getEmployees();
    dispatch(emplTableSetEmployees(data));
    dispatch(emplTableToggleIsFetching(false));
}

const InitialState = {
    isFetching: true,
    data: [],
    headerData: ["ID", "Full name", "Date of Birth"],
};

const employeesTableReducer = (state = InitialState, action) => {
    let stateCopy;
    switch (action.type){
        case EMPL_TABLE_TOGGLE_IS_FETCHING:
            stateCopy = {...state, isFetching: action.isFetching};
            return stateCopy;
            break;
        case EMPL_TABLE_SET_EMPLOYEES:
            stateCopy = {...state, data: action.data.map((elem) => {
                    const bDateArr = elem.birthDate.split("-");
                    const bdate = `${bDateArr[2]}.${bDateArr[1]}.${bDateArr[0]}`;
                    return {
                        id: elem.id,
                        name: `${elem.lastName} ${elem.firstName} ${elem.middleName}`,
                        bdate
                    }
                })};
            return stateCopy;
            break;
        case EMPL_TABLE_RESET:
            stateCopy = {...state, isFetching: true};
            return stateCopy;
            break;
        default:
            return state;
            break;
    }
}

export default employeesTableReducer;