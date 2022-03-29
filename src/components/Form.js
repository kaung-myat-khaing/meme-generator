import React from "react";

export default function Form() {
	// using the actual API to render the meme image
	const [allMemes, setAllMemes] = React.useState({});
	React.useEffect(() => {
		fetch("https://api.imgflip.com/get_memes")
			.then((res) => res.json())
			.then((memeObj) => setAllMemes(memeObj.data.memes));
	}, []);
	function handleTextChange(event) {
		const { name, value } = event.target;
		setFormData((prevformData) => ({
			...prevformData,
			[name]: value,
		}));
	}
	const [formData, setFormData] = React.useState({
		topText: "one does not simply",
		bottomText: "walk into mordor",
	});
	const [meme, setMeme] = React.useState({
		topText: formData.topText,
		bottomText: formData.bottomText,
		randomImg: "http://i.imgflip.com/1bij.jpg",
	});
	// updateMemeImg with API response
	function updateMemeImgWithApi() {
		setFormData({ topText: "", bottomText: "" });
		let rand = Math.floor(Math.random() * allMemes.length);
		setMeme((prevMeme) => ({ ...prevMeme, randomImg: allMemes[rand].url }));
	}
	return (
		<>
			<form className="generate-meme-form" action="#">
				<div className="row justify-content-evenly h-auto">
					<div className="col-12 col-sm-6 my-2">
						<input
							type="text"
							placeholder="Top text"
							className="border-1 rounded-3 form-control border-dark"
							name="topText"
							onChange={handleTextChange}
							value={formData.topText}
						/>
					</div>
					<div className="col-12 col-sm-6 my-2">
						<input
							type="text"
							placeholder="Bottom text"
							className="border-1 rounded-3 form-control border-dark"
							name="bottomText"
							onChange={handleTextChange}
							value={formData.bottomText}
						/>
					</div>
				</div>

				<button
					type="button"
					className=" text-center w-100 text-white p-2 mt-3 mb-5 rounded-3 mx-auto"
					onClick={updateMemeImgWithApi}
				>
					{" "}
					Get a new meme image 🖼
				</button>
			</form>
			<div className="meme-template mx-auto">
				<img
					className="meme-template--img mx-auto rounded-3"
					src={meme.randomImg}
					alt="meme-temeplate"
				/>
				<h2 className="meme-template--text top-text mx-auto">
					{formData.topText}
				</h2>
				<h2 className="meme-template--text btm-text mx-auto">
					{formData.bottomText}
				</h2>
			</div>
		</>
	);
}
