import { useState } from "react";
import { allUsers } from "../../utills/localStorage";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function ForgetPass() {
	const [userName, setUserName] = useState("");
	const [newPass, setNewPass] = useState("");
	const [showPassField, setShowPassField] = useState(false);

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const allUser = allUsers();

		if (allUser.find((user) => user.userName === userName)) {
			setShowPassField(true);
			document
				.getElementById("usernameSingIn")
				.setAttribute("disabled", "disabled");
		} else {
			setUserName("");
			return toast.error("Invalid username!");
		}

		if (newPass) {
			if (newPass.length > 7) {
				for (const u of allUser) {
					if (u.userName === userName) {
						localStorage.removeItem("users");
						u["password"] = newPass;

						navigate("/signIn");
						toast.success("Your Password is successfully changed!");
					} else {
						continue;
					}
				}
				localStorage.setItem("users", JSON.stringify(allUser));
			} else {
				toast.error("Password should be 8 cherecter!");
			}
		}
	};

	return (
		<>
			<div className="flex flex-col lg:gap-5 justify-center items-center lg:h-[80vh] background container mx-auto mt-12">
				<div className="w-full shadow-2xl max-w-md p-8 space-y-3 rounded-xl text-[#131313] border">
					<h1 className="text-2xl font-bold text-center">
						Recover Password
					</h1>
					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="space-y-1">
							<label className="block text-[#131313] font-semibold font-work">
								Username
							</label>
							<input
								type="text"
								name="username"
								id="usernameSingIn"
								placeholder="Username"
								onChange={(e) => setUserName(e.target.value)}
								value={userName}
								className="w-full px-4 py-3 rounded-md focus:border-violet-400"
							/>
						</div>

						{showPassField && (
							<div className="space-y-1">
								<label className="block text-[#131313] font-semibold font-work">
									Password
								</label>
								<input
									type="password"
									name="passwordSingIn"
									id="passwordSingIn"
									placeholder="Password"
									onChange={(e) => setNewPass(e.target.value)}
									className="w-full px-4 py-3 rounded-md focus:border-violet-400"
								/>
							</div>
						)}
						<button className="block w-full p-3 text-center rounded-lg text-gray-900 bg-green-400 hover:bg-green-500 font-work">
							{showPassField ? "Change Pass" : "Find Now"}
						</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default ForgetPass;
