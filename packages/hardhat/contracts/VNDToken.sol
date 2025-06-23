// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract VNDToken is ERC20 {
	// 1. Token Basics
	uint256 public constant MAX_SUPPLY = 50_000_000 * 10 ** 18; // 50 million tokens

	// 2. Charity System
	mapping(address => bool) public verifiedCharities;
	mapping(address => uint256) public donationTaxDeductionRates; // 500 = 5%

	// 3. Events
	event CharityRegistered(address charity, uint256 taxDeductionRate);
	event DonationMade(
		address donor,
		address charity,
		uint256 amount,
		uint256 taxCredit
	);

	// 4. Initialization
	constructor() ERC20("Vietnamese Dong", "VND") {
		// _mint(msg.sender, MAX_SUPPLY); // Create all tokens for deployer
	}

	// 5. Core Functions
	function transfer(
		address to,
		uint256 amount
	) public override returns (bool) {
		_transfer(msg.sender, to, amount);
		return true;
	}

	// 6. Charity Functions
	function donateToCharity(
		address charity,
		uint256 amount
	) public returns (bool) {
		require(verifiedCharities[charity], "Not a verified charity");
		uint256 taxCredit = (amount * donationTaxDeductionRates[charity]) /
			10000;

		_transfer(msg.sender, charity, amount);
		_mint(msg.sender, taxCredit);

		emit DonationMade(msg.sender, charity, amount, taxCredit);
		return true;
	}

	function registerCharity(address charity, uint256 taxDeductionRate) public {
		require(taxDeductionRate <= 1000, "Deduction rate too high (max 10%)");
		verifiedCharities[charity] = true;
		donationTaxDeductionRates[charity] = taxDeductionRate;
		emit CharityRegistered(charity, taxDeductionRate);
	}

	// 7. Utility Functions
	function getCirculatingSupply() public view returns (uint256) {
		return totalSupply();
	}

	// Minting (open to anyone but can't exceed max supply)
	function mint(address to, uint256 amount) public {
		require(
			totalSupply() + amount <= MAX_SUPPLY,
			"VND: Exceeds max supply"
		);
		_mint(to, amount);
	}

	function burn(uint256 amount) public {
		_burn(msg.sender, amount);
	}
}
