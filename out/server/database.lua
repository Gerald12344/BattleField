-- Compiled with roblox-ts v1.1.1
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
-- // Written By GerldIn2016 \\--
local DataStore2 = TS.import(script, TS.getModule(script, "datastore2").src)
local ReplicatedStorage = TS.import(script, TS.getModule(script, "services")).ReplicatedStorage
local getSettings = TS.import(script, game:GetService("ReplicatedStorage"), "Modules", "CustomisableConfig").getSettings
DataStore2.Combine("DATA", "OwnedItems")
local function CheckOwnerShipOfItems(player)
	local OwnedItems = DataStore2("OwnedItems", player)
	-- ReplicatedStorage.Events.ItemOwnsership.FireClient(player, [{ UUID: "1", owned: true }], "OwnedItems")
	local callRemote = function(value, data)
		ReplicatedStorage.Events.ItemOwnsership:FireClient(player, value, data)
	end
	callRemote(OwnedItems:Get({}), "OwnedItems")
	OwnedItems:OnUpdate(function(e)
		callRemote(e, "OwnedItems")
	end)
end
local function CheckOwnerShip()
	local _0 = ReplicatedStorage:FindFirstChild("Events")
	if _0 ~= nil then
		_0 = _0:FindFirstChild("CheckOwnership")
	end
	local remoteFunc = _0
	if not (remoteFunc and remoteFunc:IsA("RemoteFunction")) then
		return nil
	end
	remoteFunc.OnServerInvoke = function(plr, uuid)
		local OwnedItems = DataStore2("OwnedItems", plr)
		local data = OwnedItems:Get({})
		local has = false
		local newdata = data
		print(newdata)
		print(uuid)
		local _1 = uuid
		if not (type(_1) == "number") then
			return nil
		end
		local _2 = newdata
		local _3 = function(element)
			print(tostring(element) .. " - " .. tostring(uuid))
			if element == uuid then
				has = true
			end
		end
		-- ▼ ReadonlyArray.forEach ▼
		for _4, _5 in ipairs(_2) do
			_3(_5, _4 - 1, _2)
		end
		-- ▲ ReadonlyArray.forEach ▲
		local settings = getSettings("all")
		local _4 = settings
		local _5 = function(element)
			local _6 = element.UUID == uuid and element.group ~= -1
			if _6 then
				_6 = element.group
				if _6 ~= 0 and _6 == _6 and _6 then
					_6 = element.rank
				end
			end
			if _6 ~= 0 and _6 == _6 and _6 then
				if plr:GetRankInGroup(element.group) >= element.rank then
					has = true
				end
			end
		end
		-- ▼ ReadonlyArray.forEach ▼
		for _6, _7 in ipairs(_4) do
			_5(_7, _6 - 1, _4)
		end
		-- ▲ ReadonlyArray.forEach ▲
		return has
	end
end
return {
	CheckOwnerShipOfItems = CheckOwnerShipOfItems,
	CheckOwnerShip = CheckOwnerShip,
}
