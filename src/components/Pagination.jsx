/* This example requires Tailwind CSS v2.0+ */
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

export default function Pagination({page,setPage}) {
  console.log(page)
  const prepage =()=>{
    if(page != 1){
      setPage(page-1)
    }
  }
  const nextpage =()=>{
    if(page != 10){
      setPage(page+1)
    }
    console.log(page)
  }

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden sml:block not">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          onClick={prepage}
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          onClick={nextpage}
        >
          Next
        </a>
      </div>
      <div className="sm:flex sm:flex-1 sm:items-center sm:justify-between sml:hidden">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{((page-1)*10)+1}</span> to <span className="font-medium">{page*10}</span> of{' '}
            <span className="font-medium">100</span> results
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" onClick={prepage}/>
            </a>
            <a
              href="#"
              className={page==1?"cpage":"page"}
              onClick={()=>setPage(1)}
            >
              1
            </a>
            <a
              href="#"
              className={page==2?"cpage":"page"}
              onClick={()=>setPage(2)}
            >
              2
            </a>
            <a
              href="#"
              className={page==3?"cpage":"page"}
              onClick={()=>setPage(3)}
            >
              3
            </a>
            <span className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">
              ...
            </span>
            <a
              href="#"
              className={page==8?"cpage":"page"}
              onClick={()=>setPage(8)}
            >
              8
            </a>
            <a
              href="#"
              className={page==9?"cpage":"page"}
              onClick={()=>setPage(9)}
            >
              9
            </a>
            <a
              href="#"
              className={page==10?"cpage":"page"}
              onClick={()=>setPage(10)}
            >
              10
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" onClick={nextpage}/>
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}
