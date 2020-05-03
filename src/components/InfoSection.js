import React from 'react';

const InfoSection = () => {
	return (
		<div className="info-section">
			<h1>What We're About</h1>
			<div className="info-block-section">
				<div className="info-block">
					<h3>Stocks</h3>
					<p>Get information on all of your favorite stocks, and customize your feed so you only see the stocks that you're interested in!</p>
				</div>
				<div className="info-block">
					<h3>Crypto</h3>
					<p>See the current prices for all of your favorite crypto currencies. This is the perfect way to stay up to date with your crypto wallet.</p>
				</div>
				<div className="info-block">
					<h3>News</h3>
					<p>For everyone that's serious about their stocks and crypto, you can stay in the know when it comes to stock and crypto companies that you're interested in</p>
				</div>
			</div>
		</div>
	)
}

export default InfoSection;