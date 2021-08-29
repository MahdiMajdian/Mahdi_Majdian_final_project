import React from "react"
import {
	FiShoppingCart,
	FiUser,
	FiSearch,
	FiMoreHorizontal,
	FiChevronDown,
	FiPercent,
	FiSun,
	FiMoon,
} from "react-icons/fi"
import { BiCoin } from "react-icons/bi"
import { FaHandshake } from "react-icons/fa"
import logo from "../../assets/images/logo.webp"
import { useState, useEffect } from "react"

interface IHeader {
	themeToggle: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Header: React.FC<IHeader> = (props) => {
	const [isMenuVisible, setIsMenuVisible] = useState<boolean>(true)

	useEffect(() => {
		let oldScroll = 0
		window.onscroll = () => {
			const newScroll = window.pageYOffset
			if (newScroll - oldScroll > 0) {
				setIsMenuVisible(false)
			} else if (newScroll - oldScroll < 0) {
				setIsMenuVisible(true)
			}
			oldScroll = newScroll
		}
	}, [])

	return (
		<header className="w-screen flex flex-col justify-center  fixed  text-gray-800 dark:text-white">
			<div className="transition duration-300 h-20 w-full flex justify-around items-center mx-auto max-w-8xl z-10 bg-white dark:bg-gray-800">
				<div>
					<img src={logo} alt="logo" className="h-10" />
				</div>

				<div className="w-96 flex items-center transition ease-in-out duration-200 hover:bg-gray-300 bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-700  rounded-full">
					<input
						className="w-full text-sm bg-transparent transition ease-in-out duration-200 bg-gray-200 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full  dark:text-white outline-none p-2.5"
						placeholder="دنبال چه چیزی می گردید؟"
					/>
					<a href="#" className="p-2.5">
						<FiSearch />
					</a>
				</div>

				<div className="flex items-center gap-4">
					<div className="">
						<p className="text-gray-500 text-xs py-0.5">
							با ما تماس بگیرید
						</p>
						<p className="text-sm py-0.5">021-87700265</p>
					</div>
					<div className="flex ">
						<button className="relative">
							<FiShoppingCart className="btn drop-shadow-lg" />
							<div className="absolute -top-1 -right-2 iransans text-2xs font-bold flex justify-center items-center text-gray-600 bg-yellow-400 rounded-full w-5 h-4">
								24
							</div>
						</button>
					</div>
					<button>
						<FiUser className="btn drop-shadow-lg" />
					</button>
				</div>
			</div>
			{/* subHeader */}
			<div
				className={`transform transition duration-300 ${
					!isMenuVisible && "-translate-y-10"
				} shadow-md  h-10 w-full text-sm text-gray-600 font-medium dark:text-gray-200 bg-white dark:bg-gray-800 flex justify-around items-center mx-auto max-w-8xl`}>
				<div>
					<ul className="flex gap-4">
						<li>
							<a href="#" className="flex items-center gap-1">
								<p>دسته بندی ها</p>
								<FiChevronDown className="text-green-400" />
							</a>
						</li>
						<li>
							<a href="#">
								<p>چرا هایپر کامپیوتر</p>
							</a>
						</li>
						<li>
							<a href="#">
								<p>راهنمای خرید</p>
							</a>
						</li>
						<li>
							<a href="#">
								<p>هارد پی‌سی</p>
							</a>
						</li>
						<li>
							<a href="#">
								<p>شرایط گارانتی</p>
							</a>
						</li>
						<li>
							<a href="#" className="flex items-center gap-1">
								<p>سایر</p>
								<FiMoreHorizontal className="text-green-400" />
							</a>
						</li>
					</ul>
				</div>
				<div>
					<ul className="flex gap-4">
						<li className="my-auto">
							<a href="#" className="flex items-center gap-2">
								<BiCoin className="text-green-500 text-base" />
								<p>خرید اقساطی</p>
							</a>
						</li>
						<li className="my-auto">
							<a href="#" className="flex items-center gap-2">
								<FiPercent className="text-green-500 text-base" />
								<p>فروش ویژه</p>
							</a>
						</li>
						<li className="my-auto">
							<a href="#" className="flex items-center gap-2">
								<FaHandshake className="text-green-500 text-base" />
								<p>دست دوم</p>
							</a>
						</li>
						<li className="flex gap-2 items-center my-auto">
							<button
								onClick={props.themeToggle}
								className="flex overflow-hidden w-5 h-5 relative rounded-full">
								<FiMoon className="w-full h-full text-green-500 transform transition duration-700 absolute translate-x-5 dark:translate-x-0" />
								<FiSun className="w-full h-full text-yellow-500 transform transition duration-700 absolute translate-x-0 dark:-translate-x-5" />
							</button>
						</li>
					</ul>
				</div>
			</div>
		</header>
	)
}

export default Header
