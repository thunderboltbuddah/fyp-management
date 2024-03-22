import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./main.css";
import { Context } from "../../context/Context";
const Main = () => {
	const student="Test User";
	const {
		onSent,
		recentPrompt,
		showResults,
		loading,
		resultData,
		setInput,
		input,
	} = useContext(Context);

    const handleCardClick = (promptText) => {
			setInput(promptText);
		};
	return (
		<div className="aiMain ">
			<div className="nav">
			<h3 className="mt-3 mb-4 text-center">
    Get Project Ideas From Your Personal AI Assistant
        
    </h3>
    
    <p className='text-center'> 
    <i className="fas fa-lightbulb"></i>
     {"  Powered by Gemini Engine"}
    </p>
					</div>
			<div className="aiMain-container">
				{!showResults ? (
					<>
						<div className="greet">
							<p>
								<span>Hello , {student} </span>
							</p>
							<p>How Can i Help You Today?</p>
						</div>
						<div className="cards">
							<div
								className="card"
								onClick={() =>
									handleCardClick("How to Set Up User Authentication in Django ? ")
								}
							>
								<p>How to Set Up User Authentication in Django ? </p>
								<img src={assets.compass_icon} alt="" />
							</div>
							<div
								className="card"
								onClick={() =>
									handleCardClick(
										"How to Build a RESTful API with Flask ?"
									)
								}
							>
								<p>How to Build a RESTful API with Flask ? </p>
								<img src={assets.message_icon} alt="" />
							</div>
							<div
								className="card"
								onClick={() =>
									handleCardClick("Give Me a React Snippet for Importing a Custom CSS File?")
								}
							>
								<p>Give Me a React Snippet for Importing a Custom CSS File?</p>
								<img src={assets.bulb_icon} alt="" />
							</div>
							<div
								className="card"
								onClick={() => {
									handleCardClick(
										"Create a Script for Setting up Mongoose in NodeJs "
									);
								}}
							>
								<p>Create a Script for Setting up Mongoose in NodeJs </p>
								<img src={assets.code_icon} alt="" />
							</div>
						</div>
					</>
				) : (
					<div className="result">
						<div className="result-title">
						<i class="fas fa-user bg-dark p-3 rounded" style={{ color: 'white' }} ></i>
							<p>{recentPrompt}</p>
						</div>
						<div className="result-data">
							<img src={assets.gemini_icon} alt="" />
							{loading ? (
								<div className="loader">
									<hr />
									<hr />
									<hr />
								</div>
							) : (
								<p dangerouslySetInnerHTML={{ __html: resultData }}></p>
							)}
						</div>
					</div>
				)}

				<div className="aiMain-bottom mt-4">
					<div className="search-box">
						<input
							onChange={(e) => {
								setInput(e.target.value);
							}}
							value={input}
							type="text"
							placeholder="Enter the Prompt Here"
						/>
						<div>
							
							<img
								src={assets.send_icon}
								alt=""
								onClick={() => {
									onSent();
								}}
							/>
						</div>
					</div>
					<div className="bottom-info">
						<p>
							Gemini may display inaccurate info, including about people, so
							double-check its responses. Your privacy & Gemini Apps
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
