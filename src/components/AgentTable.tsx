import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import AgentDto from "../data/DataTransferObjects/AgentDto";
import { useEffect, useRef, useState } from "react";
import ApiClient from "../helpers/ApiClient";
import columns from "../data/columnDefs/agents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const AgentTable = () => {
    const [agents, setAgents] = useState<Partial<AgentDto[]>>([]);
    const [columnFilters, setColumnFilters] = useState<{id: string, value: any}[]>([]);
    
    const filterInput = useRef<HTMLInputElement>(null);

    const emptyInput = () => {
        if (filterInput.current === null) return;
        filterInput.current.value = '';
        setColumnFilters([{ id: "addedByUser", value: filterInput.current.value }]);
    }

    const handleFilterChange = (id: string) => {
        setColumnFilters((prevState) => {
            if (filterInput.current === null) return prevState;
            return [{ id, value: filterInput.current.value }];
        });
    }

    useEffect(() => {
        const apiClient = new ApiClient();
        apiClient.getAgents().then((data: AgentDto[]) => {
            setAgents(data);
        });
    }, []);

    const table = useReactTable({
        data: agents,
        columns,
        state: {
            columnFilters,
        },
        initialState: {
            pagination: {
                pageSize: 6,
            },
        },
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        columnResizeMode: 'onChange',
    });

    return (
        <div className="w-full h-min">
            <div style={{width: table.getTotalSize()}} className="flex justify-between items-center p-2">
                <div className="flex p-1 pl-2 bg-gray-100 text-gray-400 rounded-lg items-center space-x-2">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input onFocus={emptyInput} ref={filterInput} onChange={() => handleFilterChange("addedByUser")} defaultValue="Filter by name" className="focus:text-gray-800 bg-gray-100 text-gray-400 rounded-lg outline-none h-8" />
                </div>
                <div className="flex space-x-2">
                    <button className="bg-[#F95B6A] text-white px-4 py-2 rounded-lg">Add Agent</button>
                    <button className="bg-[#F95B6A] text-white px-4 py-2 rounded-lg">Export</button>
                </div>
            </div>
            <table className="font-inter shadow-md overflow-hidden rounded-lg ml-2 divide-y divide-gray-200" width={table.getTotalSize()} >
                <thead className="bg-gray-100">
                    {table.getHeaderGroups().map((headerGroup) => <tr key={headerGroup.id}>
                        {headerGroup.headers.map(
                            header => <th style={{width: header.getSize()}} className="relative group group-hover:opacity-100 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" key={header.id}>
                                {String(header.column.columnDef.header)}
                                <div onMouseDown={
                                    header.getResizeHandler()
                                }
                                onTouchStart={header.getResizeHandler()}
                                className={`absolute opacity-0 group-hover:opacity-100 top-0 -right-0.5 h-full w-1 
                                bg-[#F95B6A] cursor-col-resize select-none touch-none rounded-lg
                                ${header.column.getIsResizing() ? 'bg-red-500 opacity-100' : ''}`}></div>
                            </th>
                        )}
                    </tr>)}
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {
                        table.getRowModel().rows.map(row => <tr key={row.id}>
                            {row.getVisibleCells().map(cell => <td className="px-6 py-4 whitespace-nowrap" style={{width: cell.column.getSize()}} key={cell.id}>
                                {
                                    flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )
                                }
                            </td>)}
                        </tr>)

                    }
                </tbody>
            </table>
            <br />
            <div style={{width: table.getTotalSize()}} className="flex justify-between items-center">
                <p className="pl-2 text-sm text-gray-700 font-medium">
                    Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
                </p>
                <div>
                    <FontAwesomeIcon onClick={() => table.previousPage()} className={`p-2 text-gray-700 border rounded-lg rounded-r-none pl-3 pr-3 ${table.getCanPreviousPage() ? 'bg-white cursor-pointer' : 'bg-gray-50'} hover:bg-gray-50`} icon={faChevronLeft} />
                    <FontAwesomeIcon onClick={() => table.nextPage()}  className={`p-2 text-gray-700 border rounded-lg rounded-l-none pl-3 pr-3 ${table.getCanNextPage() ? 'bg-white cursor-pointer' : 'bg-gray-50'} hover:bg-gray-50`} icon={faChevronRight} />
                </div>
            </div>
        </div>
    );
}

export default AgentTable;