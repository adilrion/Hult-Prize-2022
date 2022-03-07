import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const navigation = [
  { name: "Home", href: "home", current: true },
  { name: "Foods", href: "food", current: false },
  { name: "Fish", href: "fish", current: false },
  { name: "Vegetable", href: "vegetable", current: false },
  { name: "Contact", href: "contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Navigation = () => {
  return (
    <>
      <Disclosure as="nav" className="bg-[#FFCC33]">
        {({ open }) => (
          <>
            <div className="mx-auto px-2 sm:px-6 lg:px-36">
              <div className="relative flex items-center justify-between h-16 w-full">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-900 hover:bg-[#ffcc33c9] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <h1 className="text-black text-2xl font-bold">TaTka</h1>
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <HashLink
                          key={item.name}
                          // as={HashLink}
                          to={`home#${item.href}`}
                          scroll={(el) =>
                            el.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            })
                          }
                          className="text-black hover:bg-[#131f3362] hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                        >
                          {item.name}
                        </HashLink>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden right-0">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <HashLink
                    key={item.name}
                    // as={HashLink}
                    to={`home#${item.href}`}
                    scroll={(el) =>
                      el.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      })
                    }
                    className="text-black hover:bg-[#FFCC33] hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item.name}
                  </HashLink>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Navigation;