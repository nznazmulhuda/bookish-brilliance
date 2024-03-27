import { Link, NavLink } from "react-router-dom";

function Navbar() {
	return (
		<>
			<div className="navbar bg-base-100 container mx-auto mt-6 lg:mt-12">
				<div className="navbar-start">
					<div className="dropdown">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost lg:hidden"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</div>

						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
						>
							<NavLink
								to={"/"}
								className={({ isActive }) =>
									isActive
										? "text-[#23BE0A] text-lg font-semibold font-work border border-[#23BE0A] py-[14px] px-5 rounded-lg"
										: "text-[#131313CC] text-lg font-work font-normal border border-transparent py-[14px] px-5 rounded-lg hover:border-[#23BE0A] hover:text-[#23BE0A]"
								}
							>
								Home
							</NavLink>

							<NavLink
								to={"/listed_books"}
								className={({ isActive }) =>
									isActive
										? "text-[#23BE0A] text-lg font-semibold font-work border border-[#23BE0A] py-[14px] px-5 rounded-lg"
										: "text-[#131313CC] text-lg font-work font-normal border border-transparent py-[14px] px-5 rounded-lg hover:border-[#23BE0A] hover:text-[#23BE0A]"
								}
							>
								Listed Books
							</NavLink>

							<NavLink
								to={"/pages_to_read"}
								className={({ isActive }) =>
									isActive
										? "text-[#23BE0A] text-lg font-semibold font-work border border-[#23BE0A] py-[14px] px-5 rounded-lg"
										: "text-[#131313CC] text-lg font-work font-normal border border-transparent py-[14px] px-5 rounded-lg hover:border-[#23BE0A] hover:text-[#23BE0A]"
								}
							>
								Pages to Read
							</NavLink>
						</ul>
					</div>

					<NavLink
						to={"/"}
						className="btn btn-ghost text-[#131313] font-work text-2xl lg:text-3xl font-bold"
					>
						Bookish Brilliance
					</NavLink>
				</div>

				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1 flex items-center gap-4">
						<NavLink
							to={"/"}
							className={({ isActive }) =>
								isActive
									? "text-[#23BE0A] text-lg font-semibold font-work border border-[#23BE0A] py-[14px] px-5 rounded-lg"
									: "text-[#131313CC] text-lg font-work font-normal border border-transparent py-[14px] px-5 rounded-lg hover:border-[#23BE0A] hover:text-[#23BE0A]"
							}
						>
							Home
						</NavLink>

						<NavLink
							to={"/listed_books"}
							className={({ isActive }) =>
								isActive
									? "text-[#23BE0A] text-lg font-semibold font-work border border-[#23BE0A] py-[14px] px-5 rounded-lg"
									: "text-[#131313CC] text-lg font-work font-normal border border-transparent py-[14px] px-5 rounded-lg hover:border-[#23BE0A] hover:text-[#23BE0A]"
							}
						>
							Listed Books
						</NavLink>

						<NavLink
							to={"/pages_to_read"}
							className={({ isActive }) =>
								isActive
									? "text-[#23BE0A] text-lg font-semibold font-work border border-[#23BE0A] py-[14px] px-5 rounded-lg"
									: "text-[#131313CC] text-lg font-work font-normal border border-transparent py-[14px] px-5 rounded-lg hover:border-[#23BE0A] hover:text-[#23BE0A]"
							}
						>
							Pages to Read
						</NavLink>

						<NavLink
							to={"/about_us"}
							className={({ isActive }) =>
								isActive
									? "text-[#23BE0A] text-lg font-semibold font-work border border-[#23BE0A] py-[14px] px-5 rounded-lg"
									: "text-[#131313CC] text-lg font-work font-normal border border-transparent py-[14px] px-5 rounded-lg hover:border-[#23BE0A] hover:text-[#23BE0A]"
							}
						>
							About Us
						</NavLink>
					</ul>
				</div>

				<div className="hidden sm:flex lg:flex navbar-end gap-4">
					<Link to={"/signIn"} className=" font-work">
						<button className=" font-work bg-[#23BE0A] sm:py-[5px] lg:py-[18px] px-3 lg:px-7 text-white font-semibold cursor-pointer font-work text-lg rounded-lg">
							Sign In
						</button>
					</Link>

					<Link to={"/signUp"} className=" font-work">
						<button className="bg-[#59C6D2] sm:py-[5px] lg:py-[18px] px-3 lg:px-7 text-white font-semibold cursor-pointer font-work text-lg rounded-lg">
							Sign Up
						</button>
					</Link>
				</div>
			</div>

			<div className="flex justify-between sm:hidden lg:hidden px-3 font-work">
				<Link to={"/signIn"} className=" font-work">
					<button className="bg-[#23BE0A] py-[9px] px-3 text-white font-semibold cursor-pointer font-work text-sm rounded-lg">
						Sign In
					</button>
				</Link>

				<Link to={"/signUp"} className=" font-work">
					<button className="bg-[#59C6D2] py-[9px] px-3 text-white font-semibold cursor-pointer font-work text-sm rounded-lg">
						Sign Up
					</button>
				</Link>
			</div>
		</>
	);
}

export default Navbar;
