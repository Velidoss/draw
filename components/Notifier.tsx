import { Transition } from "@headlessui/react";
import { FC } from "react";

type Props = {
  show: boolean;
}

export const Notifier: FC<Props> = ({show}) => {

  return (
      <Transition 
        show={show} 
        className="cursor-pointer" 
        enter="transition ease-in-out duration-1000 transform"
        enterFrom="-translate-x-10 opacity-0"
        enterTo="translate-x-10 opacity-100"
        leave="transition ease-in-out duration-1000 transform"
        leaveFrom="translate-x-10 opacity-100"
        leaveTo="-translate-x-10 opacity-0"
      >
        <div className="fixed min-w-250 text-right bottom-8 left-8 p-5 bg-gradient-to-r from-violet to-pink rounded-2xl">
          notifyOpen
        </div>
      </Transition>
    
  )
}