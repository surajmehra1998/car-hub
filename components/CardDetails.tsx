"use client";

import { CarProps } from "@/types";
import Image from "next/image";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  cars: CarProps;
}

const CardDetails = ({ isOpen, closeModal, cars }: CarDetailsProps) => {
  //   console.log(cars);
  //   console.log(Object.entries(cars));
  return (
    <Fragment>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-black bg-opacity-25"
              onClick={closeModal}
            ></div>
          </Transition.Child>
          <div className="fixed overflow-y-auto inset-0">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="overflow-y-auto relative bg-white p-6 shadow-xl w-full max-w-lg max-h-[90vh] transition-all transform rounded-2xl text-left flex flex-col gap-5">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-2 right-2 z-10 p-2 bg-primary-blue-100 rounded-full"
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                    />
                  </button>
                  <div className="flex-1 flex  flex-col gap-3">
                    <div className="relative w-full flex flex-center h-40 bg-pattern bg-cover bg-center rounded-lg">
                      <Image
                        src="/hero.png"
                        width={100}
                        height={100}
                        alt="Car Model"
                        priority
                        className="object-contain"
                      />
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-1">
                        <Image
                          src="/hero.png"
                          width={100}
                          height={100}
                          alt="Car Model"
                          priority
                          className="object-contain m-auto"
                        />
                      </div>
                      <div className="flex-1">
                        <Image
                          src="/hero.png"
                          width={100}
                          height={100}
                          alt="Car Model"
                          priority
                          className="object-contain m-auto"
                        />
                      </div>
                      <div className="flex-1">
                        <Image
                          src="/hero.png"
                          width={100}
                          height={100}
                          alt="Car Model"
                          priority
                          className="object-contain m-auto"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col">
                    <h2 className="font-semibold text-xl capitalize">
                      {cars.make} <small>{cars.model}</small>
                    </h2>
                    <div className="mt-3 flex flex-col gap-4">
                      {Object.entries(cars).map(([key, value]) => (
                        <div className="flex justify-between gap-4" key={key}>
                          <h2 className="text-grey capitalize">
                            {key.split("_").join(" ")}
                          </h2>
                          <p className="text-black-100 font-bold">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </Fragment>
  );
};

export default CardDetails;
