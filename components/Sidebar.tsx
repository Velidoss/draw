import { Transition } from "@headlessui/react"
import { FC } from "react"

type Props = {
  show: boolean;
}

export const Sidebar: FC<Props> = ({show}) => {

  return (
    <Transition 
      show={show}
      className="cursor-pointer h-full fixed right-0 top-0 w-10" 
      enter="transition ease-in-out duration-1000 transform"
      enterFrom="translate-x-10 "
      enterTo="translate-x-0"
      leave="transition ease-in-out duration-1000 transform"
      leaveFrom="translate-x-0"
      leaveTo="translate-x-10 "
    >
      <div className=" bg-ivory h-full ">
        123
      </div>
     </Transition>
  )
}