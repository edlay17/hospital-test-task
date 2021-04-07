// libs
import {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';

// ui
import CustomizedTableWithLinks from "../../../ui/tables/table-with-links/table-with-links";
import CustomizedTableSkeleton from "../../../ui/tables/table-skeleton/table-skeleton";

// model
import {emplTableReset, getEmployeesData} from "../model/employees-table-reducer";

const EmployeesTable = (props) => {
    const dispatch = useDispatch();
    const employeesData = useSelector(state => state.empl.data);
    const isFetching = useSelector(state => state.empl.isFetching);
    const tableHeaderData = useSelector(state => state.empl.headerData);

    useEffect(() => {
        dispatch(getEmployeesData());
        return function cleanup() {
            dispatch(emplTableReset());
        };
    },[])

    const employeesDataWithUrl = employeesData.map((elem)=>{ // add urls to data
        return {...elem, url: `/employees/${elem.id}`}
    })

    return (
        <>
            {isFetching
                ? <CustomizedTableSkeleton count={5}/>
                : <CustomizedTableWithLinks rows={employeesDataWithUrl} headerRow={tableHeaderData}/>
            }
        </>
    )
}

export default EmployeesTable;