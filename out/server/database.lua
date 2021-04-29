-- Compiled with roblox-ts v1.1.1
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
-- // Written By GerldIn2016 \\--
local DataStore2 = TS.import(script, TS.getModule(script, "datastore2").src)
local ReplicatedStorage = TS.import(script, TS.getModule(script, "services")).ReplicatedStorage
DataStore2.Combine("DATA", "Uniforms")
local function CheckOwnerShipOfItems(player)
	local uniforms = DataStore2("Uniforms", player)
	local callRemote = function(value, data)
		ReplicatedStorage.Events.ItemOwnsership:FireClient(player, value, data)
	end
	callRemote(uniforms:Get({}), "Uniforms")
	uniforms:OnUpdate(function(e)
		callRemote(e, "Uniforms")
	end)
end
return {
	CheckOwnerShipOfItems = CheckOwnerShipOfItems,
}
