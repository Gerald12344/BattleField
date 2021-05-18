-- Compiled with roblox-ts v1.1.1
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
-- // Written By GerldIn2016 \\--
local ReplicatedStorage = TS.import(script, TS.getModule(script, "services")).ReplicatedStorage
local CoverStore = ReplicatedStorage.Assets.Helmets
local WeaponStore = ReplicatedStorage.Assets.Weaponary
local function GamepassIds()
	return { 17061614, 17061614, 10251454 }
end
local function getSettings(settings)
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
	local Primary = { {
		name = "Ranger Pew Pew Gun",
		price = 100,
		level = 5,
		Tool = WeaponStore.M1A1,
		UUID = 9,
	} }
	local Secondary = { {
		name = "Ranger Pew Pew Pistol",
		price = 100,
		level = 5,
		Tool = WeaponStore.M1911,
		UUID = 10,
	} }
	return settings == "Uniforms" and uniforms or settings == "Primary" and Primary or settings == "Secondary" and Secondary or Secondary
end
return {
	GamepassIds = GamepassIds,
	getSettings = getSettings,
}
