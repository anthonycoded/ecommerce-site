import React, { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Upload from "./Upload/Upload";
import right from "../../../assets/right.png";
import Song from "./Song";
import { GetStore } from "../../../store/actions/songActions";
import Pagination from "../../../components/UI/Pagination/Pagination";

const Store = () => {
  const [showUpload, setShowUpload] = useState(false);
  const state = useSelector((state) => state.store);
  const [products, setProducts] = useState();
  const dispatch = useDispatch();

  function toggleUpload() {
    setShowUpload(!showUpload);
  }

  function ResfreshList() {
    dispatch(GetSongs());
  }
  //Pagination Logic
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef();
  let PageSize = 5;

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return songs.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  useEffect(() => {
    if (state.store?.products?.length > 0) {
      setProducts(state.store?.products);
    }
  }, [state]);

  return (
    <div className=" py-8">
      <div className="w-full h-full flex flex-col items-start  px-4">
        <p className="text-3xl  w-full ">Manage Store</p>
        <div className="flex w-full h-full justify-start my-2 space-x-2 text-md items-center">
          <Link to="/admin" className=" font-semibold underline ">
            Admin
          </Link>
          <img src={right} alt="" className="h-3 mt-1"></img>
          <p>Store</p>
        </div>
      </div>
      <div className="px-4">
        <button
          className="bg-blue-300 px-4 py-2 rounded-lg shadow-xl "
          onClick={toggleUpload}
        >
          Upload+
        </button>
        <button className="p-4 " onClick={ResfreshList}>
          Refresh list
        </button>
      </div>
      {showUpload ? <Upload setOpen={setShowUpload}></Upload> : undefined}
      <div className="pt-12 w-full flex flex-col items-center ">
        <div className="w-full sm:w-4/5 lg:w-3/5">
          <p className="text-2xl font-semibold w-full text-left px-2 mb-4">
            Products in store
          </p>
          <div className="px-4 w-full lg:h-050 flex flex-col items-start justify-start ">
            {currentTableData?.map((item, i) => (
              <Song item={item} index={i} key={i}></Song>
            ))}
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={products?.length}
              pageSize={PageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
