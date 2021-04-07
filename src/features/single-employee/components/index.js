// libs
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Redirect} from "react-router-dom";

// ui
import CustomizedTable from "../../../ui/tables/table/table";
import CustomizedTableSkeleton from "../../../ui/tables/table-skeleton/table-skeleton";

// model
import {emplSingleReset, getSingleEmployeeData} from "../model/single-employee-reducer";

const SingleEmployeeTable = (props) => {
    const {id} = props;
    const dispatch = useDispatch();
    const employeesData = useSelector(state => state.singleEmpl.data);
    const isFetching = useSelector(state => state.singleEmpl.isFetching);
    const tableHeaderData = useSelector(state => state.singleEmpl.headerData);
    const isFindById = useSelector(state => state.singleEmpl.isFindById);
    const employeeInfo = useSelector(state => state.singleEmpl.employeeInfo);

    useEffect(() => {
        dispatch(getSingleEmployeeData(id));
        return function cleanup() {
            dispatch(emplSingleReset());
        };
    },[id])

    return (
        <>
            {(!isFetching && !isFindById) && <Redirect to="/404" />}
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
                        {employeesData.length > 0
                            ?   <CustomizedTable rows={employeesData} headerRow={tableHeaderData}/>
                            :   <div>nothing information about this employee</div>
                        }

                    </>
            }
        </>
    )
}

export default SingleEmployeeTable;