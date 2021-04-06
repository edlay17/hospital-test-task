import CustomizedTables from "../../../ui/table";
import CustomizedTablesSkeleton from "../../../ui/table-skeleton";

const EmployeesTable = () => {
    const employeesData = [
        {id: 1, name: "Vasya", bdate: "12.01.1998"},
        {id: 2, name: "Vasya222", bdate: "12.03.1998"},
        {id: 3, name: "Vasya3", bdate: "12.03.1998"},
    ];
    const tableHeaderData = ["ID", "Full name", "Date of Birth"]

    return (
        <>
            <CustomizedTables rows={employeesData} headerRow={tableHeaderData}/>
            <CustomizedTablesSkeleton count={5}/>
        </>
    )
}

export default EmployeesTable;