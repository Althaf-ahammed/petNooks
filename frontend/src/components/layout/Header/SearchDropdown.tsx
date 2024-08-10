import { useFormik } from 'formik';
import React, { useRef } from 'react';
import { CiSearch } from 'react-icons/ci';

interface SearchProps {
  handleSearch: () => void;
}

interface FormValues {
  search: string;
}

function SearchDropdown({ handleSearch }: SearchProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (values: FormValues) => {
    const data = {
      search: "",
    };
  };

  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (values: FormValues) => {
      handleSubmit(values);
    },
  });

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleSearch();
    }
  };

  return (
    <main>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <div
          className="fixed inset-0 z-10 w-screen overflow-y-auto"
          onClick={handleOutsideClick}
        >
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-baseline sm:p-0">
            <div
              ref={modalRef}
              className="relative transform overflow-hidden rounded-full bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
              <div className="bg-gray-800 h-12">
                <form className="flex h-full">
                  <CiSearch className="text-gray-300 self-center mx-2" />
                  <input
                    className="w-full h-full bg-gray-800 text-gray-300 outline-0"
                    placeholder="Search"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SearchDropdown;
