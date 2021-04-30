-- Compiled with roblox-ts v1.1.1
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
-- // Written By GerldIn2016 \\--
local ReplicatedStorage = TS.import(script, TS.getModule(script, "services")).ReplicatedStorage
local function GamepassIds()
	return { 17061614, 17061614, 10251454 }
end
local function Uniforms()
	local CoverStore = ReplicatedStorage.Assets.Helmets
	local uniforms = { {
		name = "Basic Combats",
		Shirt = 6192829155,
		pants = 6120871264,
		price = 100,
		level = 5,
		Cover = CoverStore.M1Helmet,
		UUID = 1,
	}, {
		name = "Basic Combats",
		Shirt = 6192829155,
		pants = 6120871264,
		price = 100,
		level = 5,
		Cover = CoverStore.ArmyMP,
		UUID = 2,
	}, {
		name = "Basic Combats",
		Shirt = 6192829155,
		pants = 6120871264,
		price = 100,
		level = 5,
		Cover = CoverStore.M1Helmet,
		UUID = 3,
	}, {
		name = "Basic Combats",
		Shirt = 6192829155,
		pants = 6120871264,
		price = 100,
		level = 5,
		Cover = CoverStore.M1Helmet,
		UUID = 4,
	}, {
		name = "Basic Combats",
		Shirt = 6192829155,
		pants = 6120871264,
		price = 100,
		level = 5,
		Cover = CoverStore.M1Helmet,
		UUID = 5,
	}, {
		name = "Basic Combats",
		Shirt = 6192829155,
		pants = 6120871264,
		price = 100,
		level = 5,
		Cover = CoverStore.M1Helmet,
		UUID = 6,
	}, {
		name = "Basic Combats",
		Shirt = 6192829155,
		pants = 6120871264,
		price = 100,
		level = 5,
		Cover = CoverStore.M1Helmet,
		UUID = 7,
	}, {
		name = "Basic Combats",
		Shirt = 6192829155,
		pants = 6120871264,
		price = 100,
		level = 5,
		Cover = CoverStore.M1Helmet,
		UUID = 8,
	} }
	return uniforms
end
return {
	GamepassIds = GamepassIds,
	Uniforms = Uniforms,
}
