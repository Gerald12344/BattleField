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
		name = "Basic Combat Uniform",
		Shirt = 6826400344,
		pants = 6826417710,
		price = 0,
		level = 0,
		group = 5138739,
		rank = 1,
		Cover = CoverStore.M1Helmet,
		UUID = 1,
	}, {
		name = "[LVL 5+] Combat Uniform",
		Shirt = 6826399535,
		pants = 6826417710,
		price = 0,
		level = 5,
		group = 999,
		rank = 999,
		Cover = CoverStore.M1Helmet,
		UUID = 2,
	}, {
		name = "[LVL 10+] Combat Uniform",
		Shirt = 6826399535,
		pants = 6826417710,
		price = 0,
		level = 10,
		group = 999,
		rank = 999,
		Cover = CoverStore.ArmyFieldCap,
		UUID = 3,
	}, {
		name = "Military Police Uniform",
		Shirt = 6826402010,
		pants = 6826417710,
		price = 0,
		level = 0,
		Cover = CoverStore.ArmyMP,
		UUID = 4,
	}, {
		name = "Special Forces Utilities",
		Shirt = 6826399535,
		pants = 6826417710,
		price = 0,
		level = 0,
		Cover = CoverStore.SFBeret,
		UUID = 5,
	}, {
		name = "Special Forces Combats",
		Shirt = 6826399535,
		pants = 6826417710,
		price = 0,
		level = 0,
		Cover = CoverStore.ASFBoonie,
		UUID = 6,
	}, {
		name = "General Grade Utilities",
		Shirt = 6826399535,
		pants = 6826417710,
		price = 0,
		level = 0,
		Cover = CoverStore.GeneralCap,
		UUID = 7,
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
	}, {
		name = "Basic Combats",
		Shirt = 6192829155,
		pants = 6120871264,
		price = 100,
		level = 5,
		Cover = CoverStore.M1Helmet,
		UUID = 9,
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
	local _0
	if settings == "Uniforms" then
		_0 = uniforms
	else
		local _1
		if settings == "Primary" then
			_1 = Primary
		else
			local _2
			if settings == "Secondary" then
				_2 = Secondary
			else
				local _3
				if settings == "all" then
					local _4 = {}
					local _5 = #_4
					for _6, _7 in ipairs(uniforms) do
						_4[_5 + _6] = _7
					end
					_5 = #_4
					for _6, _7 in ipairs(Primary) do
						_4[_5 + _6] = _7
					end
					_5 = #_4
					for _6, _7 in ipairs(Secondary) do
						_4[_5 + _6] = _7
					end
					_3 = _4
				else
					_3 = Secondary
				end
				_2 = _3
			end
			_1 = _2
		end
		_0 = _1
	end
	return _0
end
return {
	GamepassIds = GamepassIds,
	getSettings = getSettings,
}
