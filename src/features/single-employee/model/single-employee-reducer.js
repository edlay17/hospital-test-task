import {getEmployees, getWorklog} from "../../../api/api";

const EMPL_SINGLE_TOGGLE_IS_FETCHING = "emplSingleToggleIsFetching";
const EMPL_SINGLE_SET_WORKLOG = "emplSingleSetWorkLog";
const EMPL_SINGLE_RESET = "emplSingleReset";
const EMPL_SINGLE_GET_EMPLOYEE_INFO = "emplSingleGetEmployeeInfo";
const EMPL_SINGLE_SET_DATA = "emplSingleSetData";

const emplSingleToggleIsFetching = (isFetching) => ({
    type: EMPL_SINGLE_TOGGLE_IS_FETCHING,
    isFetching
})
const emplSingleSetWorkLog = (data) => ({
    type: EMPL_SINGLE_SET_WORKLOG,
    data
})
export const emplSingleReset = () => ({
    type: EMPL_SINGLE_RESET,
})
export const emplSingleSetData = (data) => ({
    type: EMPL_SINGLE_SET_DATA,
    data
})
export const emplSingleGetEmployeeInfo = (allData, id) => ({
    type: EMPL_SINGLE_GET_EMPLOYEE_INFO,
    allData,
    id
})

export const getSingleEmployeeData = (id) => async (dispatch, getState) => {
    dispatch(emplSingleToggleIsFetching(true));
    const employees = await getEmployees();
    dispatch(emplSingleGetEmployeeInfo(employees, id));
    const worklog = await getWorklog();
    dispatch(emplSingleSetWorkLog(worklog));
    let data = getState().singleEmpl.workLog.map((elem1) => { // {id: 1, emp_id: 1, from: 1617500684000, to: 1617507969000}
        if(elem1.emp_id == id){
            let employeesOnWorkNow = [];
            getState().singleEmpl.workLog.forEach((elem2) => { // elem1 - current employee, elem2 - some employee from workLog
                if(elem2.emp_id != id){ // if some employee id from workLog not equal to current employee id
                    if(elem1.to > elem2.from && elem1.to < elem2.to){ // if some employee was at work when current employee leave work
                        if(employeesOnWorkNow.indexOf(elem2.emp_id) === -1){
                            employeesOnWorkNow.push(elem2.emp_id);
                        }
                    }
                }
            })

            let isViolation;
            if (employeesOnWorkNow.length>1)isViolation=false;
            else isViolation=true;
            return {
                id: elem1.id,
                from: timestampToDate(elem1.from),
                to: timestampToDate(elem1.to),
                isViolation,
                countOtherEmployeesOnWork: employeesOnWorkNow.length
            }
        }
    })
    let resultData = data.filter(el => el !== undefined);
    dispatch(emplSingleSetData(resultData));
    dispatch(emplSingleToggleIsFetching(false));
}

// help functions
const dateToTimestamp = (dateString) => {
    let date = dateString.split(" "); // "2021-04-04 00:53:00"
    let time = date[1].split(":");
    let calendar = date[0].split("-");
    return new Date(calendar[0], calendar[1], calendar[2], time[0], time[1], time[2]).getTime();
}
const timestampToDate = (timestamp) => {
    let date = new Date();
    date.setTime(timestamp);
    return `${('0' + date.getDate()).slice(-2)}.${('0' + date.getMonth()).slice(-2)}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

const InitialState = {
    isFetching: true,
    isFindById: false,
    employeeInfo: {},
    workLog: [],
    data: [],
    headerData: ["From", "To"],
};

const employeeSingleReducer = (state = InitialState, action) => {
    let stateCopy;
    switch (action.type){
        case EMPL_SINGLE_SET_DATA:
            stateCopy = {...state, data: action.data.map((elem)=>{
                    return{
                        id: elem.id,
                        from: elem.from,
                        to: elem.to,
                        isViolation: elem.isViolation,
                        countOtherEmployeesOnWork: elem.countOtherEmployeesOnWork
                    }
                })}
            return stateCopy;
            break;
        case EMPL_SINGLE_GET_EMPLOYEE_INFO:
            let singleData = action.allData.map((elem) => {
                if(elem.id==action.id){
                    return {
                        name: `${elem.lastName} ${elem.firstName} ${elem.middleName}`,
                        phone: elem.phone,
                    }
                }
            });
            let resultSingleData = singleData.filter(el => el !== undefined);
            if(resultSingleData.length>0)stateCopy = {...state, employeeInfo: resultSingleData[0], isFindById: true}
            else stateCopy = {...state, isFindById: false}
            return stateCopy;
            break;
        case EMPL_SINGLE_TOGGLE_IS_FETCHING:
            stateCopy = {...state, isFetching: action.isFetching};
            return stateCopy;
            break;
        case EMPL_SINGLE_SET_WORKLOG:
            stateCopy = {...state, workLog: action.data.map((elem) => {
                    return{
                        id: elem.id,
                        emp_id: elem.employee_id,
                        from: dateToTimestamp(elem.from),
                        to: dateToTimestamp(elem.to),
                    }
                })}
                console.log(stateCopy.workLog);
            return stateCopy;
            break;
        case EMPL_SINGLE_RESET:
            stateCopy = {...state, isFetching: true};
            return stateCopy;
            break;
        case EMPL_SINGLE_RESET:
            stateCopy = {...state, isFetching: true};
            return stateCopy;
            break;
        default:
            return state;
            break;
    }
}

export default employeeSingleReducer;