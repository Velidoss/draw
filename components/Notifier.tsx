import { Transition } from "@headlessui/react";
import { useAtom } from "jotai";
import { notificationOpenAtom } from "../store/globals";

export const Notifier = () => {
  const [notifyOpen] = useAtom(notificationOpenAtom);

  return (
    
      <Transition 
        show={notifyOpen} 
        className="cursor-pointer" 
        enter="transition-opacity duration-400"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-400"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed min-w-250 text-right bottom-8 left-8 p-5 bg-gradient-to-r from-violet to-pink rounded-2xl">
          notifyOpen
        </div>
      </Transition>
    
  )
}