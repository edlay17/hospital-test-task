import CustomizedTable from "../../../ui/tables/table";
import CustomizedTableSkeleton from "../../../ui/tables/table-skeleton";
import {useDispatch, useSelector} from "react-redux";
import {emplSingleReset, getSingleEmployeeData} from "../model/single-employee-reducer";
import {useEffect, useState} from "react";
import {Redirect} from "react-router-dom";

const SingleEmployeeTable = (props) => {
    const {id} = props;
    const dispatch = useDispatch();
    const employeesData = useSelector(state => state.singleEmpl.data);
    const isFetching = useSelector(state => state.singleEmpl.isFetching);
    const tableHeaderData = useSelector(state => state.singleEmpl.headerData);
    const isFindById = useSelector(state => state.singleEmpl.isFindById);
    const employeeInfo = useSelector(state => state.singleEmpl.employeeInfo);
    //const [isNotFound, toggleIsNotFound] = useState(false);

    useEffect(() => {
        dispatch(getSingleEmployeeData(id));
        return function cleanup() {
            dispatch(emplSingleReset());
        };
    },[id])

    /*
    if(!isFetching && isFindById && employeesData.length < 1){
        return <div>nothing information about this employee</div>
    }
    isNotFound && <Redirect to="/404" />
     */
    debugger;
    return (
        <>
            {isFetching
                ? <CustomizedTableSkeleton count={5}/>
                :
                    <>
                        <div>
                            {employeeInfo.name}
                        </div>
                        <div>
                            {employeeInfo.phone}
                        </div>
                        <CustomizedTable rows={employeesData} headerRow={tableHeaderData}/>
                    </>
            }
        </>
    )
}

export default SingleEmployeeTable;