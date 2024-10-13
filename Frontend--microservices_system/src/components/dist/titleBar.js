'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@headlessui/react");
var outline_1 = require("@heroicons/react/24/outline");
var solid_1 = require("@heroicons/react/20/solid");
var callsToAction = [
    { name: 'Watch demo', href: '#', icon: solid_1.PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: solid_1.PhoneIcon },
];
function TiTleBar() {
    var _a = react_1.useState(false), mobileMenuOpen = _a[0], setMobileMenuOpen = _a[1];
    return (React.createElement("header", { className: "bg-teal-500" },
        React.createElement("nav", { "aria-label": "Global", className: "mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" },
            React.createElement("div", { className: "flex lg:flex-1" },
                React.createElement("a", { href: "#", className: "-m-1.5 p-1.5" },
                    React.createElement("span", { className: "sr-only" }, "Logo here"))),
            React.createElement("div", { className: "flex lg:hidden" },
                React.createElement("button", { type: "button", onClick: function () { return setMobileMenuOpen(true); }, className: "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" },
                    React.createElement("span", { className: "sr-only" }, "Open main menu"),
                    React.createElement(outline_1.Bars3Icon, { "aria-hidden": "true", className: "h-6 w-6" }))),
            React.createElement(react_2.PopoverGroup, { className: "hidden lg:flex lg:gap-x-12" },
                React.createElement("a", { href: "#", className: "text-sm font-semibold leading-6 text-gray-900" }, "Features"),
                React.createElement("a", { href: "#", className: "text-sm font-semibold leading-6 text-gray-900" }, "Marketplace"),
                React.createElement("a", { href: "#", className: "text-sm font-semibold leading-6 text-gray-900" }, "Company")),
            React.createElement("div", { className: "hidden lg:flex lg:flex-1 lg:justify-end" },
                React.createElement("a", { href: "#", className: "text-sm font-semibold leading-6 text-gray-900" },
                    "Log in ",
                    React.createElement("span", { "aria-hidden": "true" }, "\u2192")))),
        React.createElement(react_2.Dialog, { open: mobileMenuOpen, onClose: setMobileMenuOpen, className: "lg:hidden" },
            React.createElement("div", { className: "fixed inset-0 z-10" }),
            React.createElement(react_2.DialogPanel, { className: "fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10" },
                React.createElement("div", { className: "flex items-center justify-between" },
                    React.createElement("a", { href: "#", className: "-m-1.5 p-1.5" },
                        React.createElement("span", { className: "sr-only" }, "Your Company"),
                        React.createElement("img", { alt: "", src: "https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600", className: "h-8 w-auto" })),
                    React.createElement("button", { type: "button", onClick: function () { return setMobileMenuOpen(false); }, className: "-m-2.5 rounded-md p-2.5 text-gray-700" },
                        React.createElement("span", { className: "sr-only" }, "Close menu"),
                        React.createElement(outline_1.XMarkIcon, { "aria-hidden": "true", className: "h-6 w-6" }))),
                React.createElement("div", { className: "mt-6 flow-root" },
                    React.createElement("div", { className: "-my-6 divide-y divide-gray-500/10" },
                        React.createElement("div", { className: "space-y-2 py-6" },
                            React.createElement("a", { href: "#", className: "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" }, "Features"),
                            React.createElement("a", { href: "#", className: "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" }, "Marketplace"),
                            React.createElement("a", { href: "#", className: "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" }, "Company")),
                        React.createElement("div", { className: "py-6" },
                            React.createElement("a", { href: "#", className: "-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" }, "Log in"))))))));
}
exports["default"] = TiTleBar;
