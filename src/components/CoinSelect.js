import React from "react";

const CoinSelect = ({ coinData, selectedCoin, setSelectedCoin }) => {
    const handleChange = e => {
        setSelectedCoin(e.target.value);
    }

    return (
        <div className="coin-select">
            <h2>Select Coin</h2>
            <select name="coins" id="coin-select" value={selectedCoin} onChange={handleChange}>
                {coinData.map(coin => <option value={coin.id}>{coin.name}</option>)}
            </select>
        </div>
    )
}

export default CoinSelect;